
    document.addEventListener('DOMContentLoaded', () => {
      // —— SPEECH / FONT / ETC. (unchanged from before) —— 

      const synth = window.speechSynthesis;
      const speakButton = document.getElementById('speakToggle');
      const pauseButton = document.getElementById('pauseButton');
      const resumeButton = document.getElementById('resumeButton');
      const stopButton = document.getElementById('stopButton');
      const restartButton = document.getElementById('restartButton');
      const confirmButton = document.getElementById('confirmSettings');

      const initialRateInput = document.getElementById('initialRate');
      const initialPitchInput = document.getElementById('initialPitch');
      const initialRateValue = document.getElementById('initialRateValue');
      const initialPitchValue = document.getElementById('initialPitchValue');

      const rateInput = document.getElementById('rate');
      const pitchInput = document.getElementById('pitch');
      const rateValue = document.getElementById('rateValue');
      const pitchValue = document.getElementById('pitchValue');

      const statusMessage = document.getElementById('statusMessage');
      const speechControls = document.getElementById('speechControls');
      const settingsModal = document.getElementById('settingsModal');
      const liveSettings = document.getElementById('liveSettings');
      const textContainer = document.getElementById('textContainer');

      const fontMap = {
        'Serif Classic': 'Georgia, "Times New Roman", Times, serif',
        'Modern Sans': 'Roboto, Arial, Helvetica, sans-serif',
        'Elegant Serif': '"Playfair Display", Baskerville, "Baskerville Old Face", serif',
        'Friendly Round': '"Nunito", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        'Technical Mono': '"Courier New", Courier, "Lucida Console", monospace',
        'Handwritten Casual': '"Comic Neue", "Comic Sans MS", cursive',
        'Clean Design': '"Open Sans", Arial, Helvetica, sans-serif',
        'Classic Lora': 'Lora, Georgia, serif',
        'Merriweather Serif': 'Merriweather, Georgia, serif',
        'Source Serif Pro': '"Source Serif Pro", Georgia, serif',
        'Crimson Text': '"Crimson Text", Georgia, serif',
        'PT Serif': '"PT Serif", Georgia, serif',
        'Libre Baskerville': '"Libre Baskerville", Georgia, serif',
        'Modern Montserrat': 'Montserrat, Arial, sans-serif',
        'Lato Sans': 'Lato, Arial, sans-serif',
        'Source Sans Pro': '"Source Sans Pro", Arial, sans-serif',
        'Georgia Custom': 'Georgia, serif',
      };

      let paragraphs = [];
      let currentIndex = 0;
      let isPaused = false;
      let isStopped = false;
      let currentUtterance = null;
      let speechQueue = [];

      const topControls = document.getElementById('topControls');
      const fontStylesToggle = document.getElementById('fontStylesToggle');
      const fontStylesDropdown = document.getElementById('fontStylesDropdown');
      const fontButtons = fontStylesDropdown.querySelectorAll('button');

      function processTextContent() {
        const elements = textContainer.querySelectorAll('p, pre');
        paragraphs = Array.from(elements);
        currentIndex = 0;
        updateButtonStates();
      }

      function updateButtonStates() {
        pauseButton.disabled = !synth.speaking || isPaused;
        resumeButton.disabled = !(isPaused || isStopped || (currentIndex >= paragraphs.length));
        stopButton.disabled = !synth.speaking && !isPaused;
      }

      function highlightCurrentParagraph(index) {
        paragraphs.forEach(p => p.classList.remove('highlight'));
        if (index >= 0 && index < paragraphs.length) {
          paragraphs[index].classList.add('highlight');
          paragraphs[index].scrollIntoView({behavior: 'smooth', block: 'center'});
        }
      }

      fontStylesToggle.addEventListener('click', event => {
        event.stopPropagation();
        fontStylesDropdown.style.display = fontStylesDropdown.style.display === 'block' ? 'none' : 'block';
      });

      document.addEventListener('click', event => {
        if (!topControls.contains(event.target)) {
          fontStylesDropdown.style.display = 'none';
        }
      });

      fontStylesDropdown.addEventListener('click', event => {
        event.stopPropagation();
        const fontButton = event.target.closest('button');
        if (!fontButton) return;
        const selectedFont = fontButton.getAttribute('data-font');
        const fontFamily = fontMap[selectedFont];
        document.body.style.fontFamily = fontFamily;
        const preElements = document.getElementsByTagName('pre');
        for (let pre of preElements) {
          if (selectedFont !== 'Technical Mono') {
            pre.style.fontFamily = 'monospace';
          } else {
            pre.style.fontFamily = fontFamily;
          }
        }
        fontButtons.forEach(btn => {
          btn.style.backgroundColor = btn.getAttribute('data-font') === selectedFont ? '#e0e0e0' : 'transparent';
        });
        fontStylesDropdown.style.display = 'none';
      });

      initialRateInput.addEventListener('input', () => initialRateValue.textContent = initialRateInput.value);
      initialPitchInput.addEventListener('input', () => initialPitchValue.textContent = initialPitchInput.value);

      rateInput.addEventListener('input', () => {
        rateValue.textContent = rateInput.value;
        if (synth.speaking && !isPaused) {
          currentUtterance.rate = parseFloat(rateInput.value);
        }
      });

      pitchInput.addEventListener('input', () => {
        pitchValue.textContent = pitchInput.value;
        if (synth.speaking && !isPaused) {
          currentUtterance.pitch = parseFloat(pitchInput.value);
        }
      });

      speakButton.addEventListener('click', () => {
        if (synth.speaking) synth.cancel();
        isStopped = false;
        isPaused = false;
        currentIndex = 0;
        speechQueue = [];
        processTextContent();
        settingsModal.style.display = 'flex';
      });

      confirmButton.addEventListener('click', () => {
        settingsModal.style.display = 'none';
        speechControls.style.display = 'flex';
        liveSettings.style.display = 'block';
        rateInput.value = initialRateInput.value;
        pitchInput.value = initialPitchInput.value;
        rateValue.textContent = rateInput.value;
        pitchValue.textContent = pitchInput.value;
        startSpeaking();
      });

      function startSpeaking() {
        if (synth.speaking) synth.cancel();
        isStopped = false;
        isPaused = false;
        currentIndex = 0;
        speechQueue = [];
        speakNextParagraph();
      }

      function speakNextParagraph() {
        if (currentIndex >= paragraphs.length || isStopped) {
          if (!isStopped && currentIndex >= paragraphs.length) {
            statusMessage.textContent = 'Speech finished.';
            paragraphs.forEach(p => p.classList.remove('highlight'));
          }
          updateButtonStates();
          return;
        }
        if (isPaused) return;

        const currentText = paragraphs[currentIndex].innerText.trim();
        if (currentText) {
          highlightCurrentParagraph(currentIndex);
          currentUtterance = new SpeechSynthesisUtterance(currentText);
          currentUtterance.rate = parseFloat(rateInput.value);
          currentUtterance.pitch = parseFloat(pitchInput.value);

          currentUtterance.onend = () => {
            currentIndex++;
            if (!isPaused && !isStopped) {
              setTimeout(() => speakNextParagraph(), 300);
            }
            updateButtonStates();
          };
          currentUtterance.onerror = event => {
            console.error('Speech synthesis error:', event);
            statusMessage.textContent = 'Speech error occurred.';
            updateButtonStates();
          };

          statusMessage.textContent = 'Speaking...';
          synth.speak(currentUtterance);
          updateButtonStates();
        } else {
          currentIndex++;
          speakNextParagraph();
        }
      }

      pauseButton.addEventListener('click', () => {
        if (synth.speaking && !isPaused) {
          synth.pause();
          isPaused = true;
          statusMessage.textContent = 'Speech paused.';
          updateButtonStates();
        }
      });

      resumeButton.addEventListener('click', () => {
        synth.cancel();
        if (isPaused) {
          isPaused = false;
          statusMessage.textContent = 'Speech resumed.';
          speakNextParagraph();
        } else if (isStopped) {
          isStopped = false;
          statusMessage.textContent = 'Speech resumed from beginning.';
          speakNextParagraph();
        } else if (currentIndex >= paragraphs.length) {
          currentIndex = 0;
          statusMessage.textContent = 'Starting from beginning.';
          speakNextParagraph();
        }
        updateButtonStates();
      });

      stopButton.addEventListener('click', () => {
        synth.cancel();
        isStopped = true;
        isPaused = false;
        currentIndex = 0;
        statusMessage.textContent = 'Speech stopped. Will restart from beginning when resumed.';
        paragraphs.forEach(p => p.classList.remove('highlight'));
        updateButtonStates();
      });

      restartButton.addEventListener('click', () => {
        synth.cancel();
        isStopped = false;
        isPaused = false;
        currentIndex = 0;
        speakNextParagraph();
        statusMessage.textContent = 'Restarted from beginning.';
        updateButtonStates();
      });

      if (!('speechSynthesis' in window)) {
        alert('Web Speech API is not supported in this browser.');
        speakButton.disabled = true;
        confirmButton.disabled = true;
        pauseButton.disabled = true;
        resumeButton.disabled = true;
        stopButton.disabled = true;
        restartButton.disabled = true;
        statusMessage.textContent = 'Speech synthesis not supported in this browser.';
      }

      window.speechSynthesis.onvoiceschanged = () => {
        if (window.speechSynthesis.getVoices().length > 0) {
          speakButton.disabled = false;
        }
      };

      updateButtonStates();
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && isPaused) {
          if (synth.paused) {
            try {synth.resume();}
            catch (e) {console.error('Error resuming speech:', e);}
          }
        }
      });

      //
      // —— NEW: Highlights, Color Swatches, Definitions & Add‑Note Feature —— 
      //

      const STORAGE_KEY = 'highlights_' + window.location.pathname;
      let currentPopup = null;
      let lastRange = null; // to store range for adding note

      // On load, restore any saved HTML (including colored spans and note spans)
      const savedHtml = localStorage.getItem(STORAGE_KEY);
      if (savedHtml) {
        textContainer.innerHTML = savedHtml;
      }

      // Save entire #textContainer innerHTML to localStorage
      function saveHighlights() {
        localStorage.setItem(STORAGE_KEY, textContainer.innerHTML);
      }

      // Remove any existing popup
      function removePopup() {
        if (currentPopup) {
          currentPopup.remove();
          currentPopup = null;
        }
      }

      // Create a small popup near (x, y) showing the note text
      function showNoteViewer(noteText, x, y, noteSpan) {
        removePopup();
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.style.top = (y + window.scrollY + 5) + 'px';
        popup.style.left = (x + window.scrollX) + 'px';

        // 1) Display the note text in a <div>
        const textDiv = document.createElement('div');
        textDiv.textContent = noteText;
        textDiv.style.marginBottom = '8px';
        popup.appendChild(textDiv);

        // 2) Add a “Delete” button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Note';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.padding = '4px 8px';
        deleteBtn.addEventListener('click', () => {
          // Remove the entire <span class="persistent-note">…</span>
          if (noteSpan) {
            const parent = noteSpan.parentNode;
            // Grab only the original selected text (first text node), not the icon character
            const plainText = noteSpan.childNodes[0].nodeValue;
            parent.replaceChild(document.createTextNode(plainText), noteSpan);
            saveHighlights();
          }
          removePopup();
        });
        popup.appendChild(deleteBtn);

        document.body.appendChild(popup);
        currentPopup = popup;
      }

      // Create a small editing popup (with textarea) near (x, y)
      function showNoteEditor(initialText, x, y, noteSpan) {
        removePopup();
        const popup = document.createElement('div');
        popup.className = 'popup note-modal';
        popup.style.top = (y + window.scrollY + 5) + 'px';
        popup.style.left = (x + window.scrollX) + 'px';

        const textarea = document.createElement('textarea');
        textarea.value = initialText || '';
        popup.appendChild(textarea);

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', () => {
          const newNote = textarea.value.trim();
          if (newNote) {
            // Update the noteSpan's data-note and keep its icon
            noteSpan.setAttribute('data-note', newNote);
            removePopup();
            saveHighlights();
          }
        });
        popup.appendChild(saveBtn);

        document.body.appendChild(popup);
        currentPopup = popup;
        textarea.focus();
      }

      // On mouseup inside textContainer, possibly show a popup
      textContainer.addEventListener('mouseup', ev => {
        removePopup();
        const sel = window.getSelection();
        const selectedText = sel.toString().trim();
        if (!selectedText) return;

        const range = sel.getRangeAt(0);
        if (!textContainer.contains(range.commonAncestorContainer)) {
          return;
        }
        // Save a clone of the range for potential “Add Note” use
        lastRange = range.cloneRange();

        // Position popup just below the selection
        const rect = range.getBoundingClientRect();
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.style.top = (rect.bottom + window.scrollY + 5) + 'px';
        popup.style.left = (rect.left + window.scrollX) + 'px';

        if (/^[A-Za-z0-9-]+$/.test(selectedText)) {
          // Single word / hyphenated → dictionary lookup
          const defContainer = document.createElement('div');
          defContainer.className = 'definition-popup';
          defContainer.textContent = 'Looking up...';

          fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(selectedText.toLowerCase()))
            .then(response => {
              if (!response.ok) throw new Error('No definition found');
              return response.json();
            })
            .then(data => {
              defContainer.textContent = '';
              data[0].meanings.forEach(meaningObj => {
                const partOfSpeech = meaningObj.partOfSpeech;
                meaningObj.definitions.slice(0, 2).forEach(defObj => {
                  const p = document.createElement('p');
                  p.style.margin = '4px 0';
                  p.innerHTML = `<strong>${partOfSpeech}:</strong> ${defObj.definition}`;
                  defContainer.appendChild(p);
                });
              });
            })
            .catch(() => {
              defContainer.textContent = 'No definition found.';
            });

          popup.appendChild(defContainer);
          document.body.appendChild(popup);
          currentPopup = popup;

        } else {
          // Multi‑word or phrase → show color swatches + note icon
          const colors = ['yellow', 'blue', 'green', 'pink', 'magenta', 'red', 'grey'];
          colors.forEach(col => {
            const swatch = document.createElement('span');
            swatch.className = 'color-swatch';
            swatch.setAttribute('data-color', col);
            swatch.addEventListener('click', () => {
              try {
                const newSpan = document.createElement('span');
                newSpan.className = 'persistent-highlight';
                newSpan.style.backgroundColor = col;
                newSpan.textContent = selectedText;
                range.deleteContents();
                range.insertNode(newSpan);
                sel.removeAllRanges();
              } catch (err) {
                console.error('Could not wrap selection:', err);
              }
              saveHighlights();
              removePopup();
            });
            popup.appendChild(swatch);
          });

          // Add‑Note icon
          const noteAdd = document.createElement('span');
          noteAdd.className = 'icon';
          noteAdd.innerHTML = '📝';
          noteAdd.title = 'Add note';
          noteAdd.style.fontSize = '16px';
          noteAdd.style.marginLeft = '6px';
          noteAdd.style.cursor = 'pointer';
          noteAdd.addEventListener('click', () => {
            // Show note editor near icon
            if (!lastRange) return;
            const {x, y} = noteAdd.getBoundingClientRect();
            showNoteEditor('', x, y, null);

            // When Save is clicked, we need to wrap the selected text:
            const saveListener = (newNoteText) => {
              if (!newNoteText.trim()) return;
              try {
                const wrapped = document.createElement('span');
                wrapped.className = 'persistent-note';
                wrapped.setAttribute('data-note', newNoteText.trim());
                wrapped.textContent = selectedText;
                // Add the page icon inside
                const icon = document.createElement('span');
                icon.className = 'note-icon';
                icon.innerHTML = '📄';
                wrapped.appendChild(icon);
                lastRange.deleteContents();
                lastRange.insertNode(wrapped);
                window.getSelection().removeAllRanges();
              } catch (err) {
                console.error('Could not wrap selection for note:', err);
              }
              saveHighlights();
              removePopup();
              // Clean up the temporary listener so it doesn't fire again
              document.removeEventListener('noteSaveEvent', onNoteSave);
            };

            // Custom event to carry saved note text
            const onNoteSave = ev2 => {
              saveListener(ev2.detail);
            };
            document.addEventListener('noteSaveEvent', onNoteSave);
          });
          popup.appendChild(noteAdd);

          document.body.appendChild(popup);
          currentPopup = popup;
        }
      });

      // Clicking anywhere else should remove the popup
      document.addEventListener('mousedown', ev => {
        if (currentPopup && !currentPopup.contains(ev.target)) {
          removePopup();
        }
      });

      // Click / Double‑click on note-icon to view or edit
      textContainer.addEventListener('click', ev => {
        const tgt = ev.target;
        if (tgt.classList && tgt.classList.contains('note-icon')) {
          ev.stopPropagation();
          const noteSpan = tgt.closest('.persistent-note');
          if (!noteSpan) return;
          const noteText = noteSpan.getAttribute('data-note') || '';
          const {x, y} = tgt.getBoundingClientRect();
          // Pass noteSpan so that the deleteBtn in showNoteViewer knows what to remove
          showNoteViewer(noteText, x, y, noteSpan);
        }
      });

      textContainer.addEventListener('dblclick', ev => {
        const tgt = ev.target;
        if (tgt.classList && tgt.classList.contains('note-icon')) {
          ev.stopPropagation();
          const noteSpan = tgt.closest('.persistent-note');
          if (!noteSpan) return;
          const existingNote = noteSpan.getAttribute('data-note') || '';
          const {x, y} = tgt.getBoundingClientRect();
          showNoteEditor(existingNote, x, y, noteSpan);
        }
      });

      // When user clicks “Save” in the note editor, dispatch a custom event
      document.addEventListener('click', ev => {
        const modal = ev.target.closest('.note-modal');
        if (modal && ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Save') {
          const textarea = modal.querySelector('textarea');
          const newText = textarea.value;
          // Fire custom event so the listener in “noteAdd” can wrap the selection
          const custom = new CustomEvent('noteSaveEvent', {detail: newText});
          document.dispatchEvent(custom);
        }
      });

      // Right-click on a persistent highlight removes it
      textContainer.addEventListener('contextmenu', ev => {
        const target = ev.target;
        if (target.classList && target.classList.contains('persistent-highlight')) {
          ev.preventDefault();
          const parent = target.parentNode;
          const textNode = document.createTextNode(target.textContent);
          parent.replaceChild(textNode, target);
          saveHighlights();
        }
      });
      //
      // —— END of new code —— 
      //
    });
