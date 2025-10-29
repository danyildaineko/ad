// rterms-patch.js — plain JS for Shopify asset (no <script> wrapper)
(function () {
  try {
    // keep original behavior: suppress a specific alert message
    var nativeAlert = (window.alert && window.alert.bind) ? window.alert.bind(window) : window.alert;

    Object.defineProperty(window, 'alert', {
      value: function (msg) {
        try {
          if (typeof msg === 'string' && /By proceeding with this purchase/i.test(msg)) return;
        } catch (e) {}
        if (typeof nativeAlert === 'function') nativeAlert(msg);
      },
      writable: false,
      configurable: false
    });

    // Prevent proceeding to checkout if a terms checkbox is not checked
    document.addEventListener('click', function (e) {
      try {
        var btn = e && e.target && e.target.closest ? e.target.closest('button[name="checkout"]') : null;
        if (!btn) return;

        // prefer a specific class if present, otherwise any checkbox
        var cb = document.querySelector('input[type="checkbox"].rterms-checkbox') || document.querySelector('input[type="checkbox"]');
        if (cb && !cb.checked) {
          e.preventDefault();
          e.stopImmediatePropagation();

          if (!document.querySelector('.rterms-error')) {
            var err = document.createElement('div');
            err.className = 'rterms-error';
            err.textContent = 'Please agree to the Terms & Conditions.';
            var insertTarget = (cb.closest && cb.closest('.terms-relentless')) || cb.parentElement || document.body;
            insertTarget.insertAdjacentElement('beforebegin', err);
          }
        }
      } catch (err) {
        // swallow to avoid breaking other scripts
        console.error('rterms patch click handler error', err);
      }
    }, true);
  } catch (outerErr) {
    console.error('rterms patch init error', outerErr);
  }
})();