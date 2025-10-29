// (() => {
//   const cb   = () => document.getElementById('tc-agree');
//   const flag = () => document.getElementById('tc-flag');
//   const err  = () => document.querySelector('.tc-error');
//   const btns = () => document.querySelectorAll('[data-tc-checkout]');

//   /* увімк / вимкнути кнопки */
//   function update() {
//     const ok = cb().checked;
//     btns().forEach(b => {
//       b.toggleAttribute('aria-disabled', !ok);   // для доступності
//       b.style.pointerEvents = ok ? '' : 'none';  // блокує клік
//       b.style.opacity       = ok ? '' : '.45';   // напівпрозора
//     });
//     flag().value = ok ? new Date().toISOString() : '';
//     if (ok) err().hidden = true;
//   }

//   /* первинний стан */
//   document.addEventListener('DOMContentLoaded', update);

//   /* клієнт кликає чекбокс */
//   document.addEventListener('change', e => {
//     if (e.target.id === 'tc-agree') update();
//   });

//   /* страховка: клік по вимкненій кнопці */
//   document.addEventListener('click', e => {
//     const bad = e.target.closest('[data-tc-checkout][aria-disabled]');
//     if (bad) {
//       e.preventDefault();
//       err().hidden = false;
//     }
//   }, true); // capture – ловимо навіть якщо тема переактивує кнопку
// })();




// const cb   = document.getElementById('tc-agree');
// const flag = document.getElementById('tc-flag');

// cb.addEventListener('change', () => {
//   flag.value = cb.checked ? new Date().toISOString() : '';
// });

