/* ═══════════════════════════════════════════════════════════════
   DATA — Batches & mock results
   In production these come from your backend API
═══════════════════════════════════════════════════════════════ */
var BATCHES = [
  {
    id: 'b1', name: 'Batch 1', desc: 'Authentication & Login flows',
    lastRun: '2h ago', lastUrl: 'https://staging.myapp.com',
    status: 'pass', pass: 8, fail: 0, total: 8,
    testcases: [
      { file: 'login.spec.ts',          desc: 'Standard login with valid credentials',  status: 'pass' },
      { file: 'logout.spec.ts',         desc: 'Session termination and redirect',        status: 'pass' },
      { file: 'forgot-password.spec.ts',desc: 'Password reset email trigger',            status: 'pass' },
      { file: 'oauth-google.spec.ts',   desc: 'Google OAuth callback handling',          status: 'pass' },
      { file: 'mfa-flow.spec.ts',       desc: 'Multi-factor authentication flow',        status: 'pass' },
      { file: 'session-timeout.spec.ts',desc: 'Idle session expiry',                     status: 'pass' },
      { file: 'invalid-login.spec.ts',  desc: 'Error state on wrong credentials',        status: 'pass' },
      { file: 'remember-me.spec.ts',    desc: 'Remember me cookie persistence',          status: 'pass' }
    ],
    baselines: [
      { file: 'login-page.png',     size: '142 KB', captured: '2026-06-25' },
      { file: 'logout-redirect.png',size: '98 KB',  captured: '2026-06-25' },
      { file: 'mfa-screen.png',     size: '115 KB', captured: '2026-06-25' }
    ]
  },
  {
    id: 'b2', name: 'Batch 2', desc: 'Dashboard & Navigation',
    lastRun: '2h ago', lastUrl: 'https://staging.myapp.com',
    status: 'fail', pass: 5, fail: 2, total: 7,
    testcases: [
      { file: 'dashboard-load.spec.ts', desc: 'Dashboard initial render',          status: 'pass' },
      { file: 'sidebar-nav.spec.ts',    desc: 'Sidebar navigation links',           status: 'fail' },
      { file: 'breadcrumb.spec.ts',     desc: 'Breadcrumb path rendering',          status: 'pass' },
      { file: 'dark-mode.spec.ts',      desc: 'Dark mode toggle visual',            status: 'fail' },
      { file: 'mobile-menu.spec.ts',    desc: 'Mobile hamburger menu',              status: 'pass' },
      { file: 'search-bar.spec.ts',     desc: 'Global search focus and results',    status: 'pass' },
      { file: 'notifications.spec.ts',  desc: 'Notification panel rendering',       status: 'pass' }
    ],
    baselines: [
      { file: 'dashboard-home.png',   size: '234 KB', captured: '2026-06-25' },
      { file: 'sidebar-open.png',     size: '198 KB', captured: '2026-06-24' },
      { file: 'dark-mode-toggle.png', size: '210 KB', captured: '2026-06-24' }
    ]
  },
  {
    id: 'b3', name: 'Batch 3', desc: 'Forms & Data Entry',
    lastRun: '5h ago', lastUrl: 'https://qa.myapp.com',
    status: 'pass', pass: 6, fail: 0, total: 6,
    testcases: [
      { file: 'user-create.spec.ts',    desc: 'User creation form submission',  status: 'pass' },
      { file: 'form-validation.spec.ts',desc: 'Required field error states',    status: 'pass' },
      { file: 'date-picker.spec.ts',    desc: 'Calendar date picker UI',        status: 'pass' },
      { file: 'file-upload.spec.ts',    desc: 'File drag and drop',             status: 'pass' },
      { file: 'dropdown-search.spec.ts',desc: 'Searchable dropdown filter',     status: 'pass' },
      { file: 'multi-step-form.spec.ts',desc: 'Multi-step form wizard',         status: 'pass' }
    ],
    baselines: [
      { file: 'create-form.png',      size: '176 KB', captured: '2026-06-23' },
      { file: 'validation-errors.png',size: '182 KB', captured: '2026-06-23' }
    ]
  },
  {
    id: 'b4', name: 'Batch 4', desc: 'Reports & Data Tables',
    lastRun: 'Yesterday', lastUrl: 'https://staging.myapp.com',
    status: 'pending', pass: 0, fail: 0, total: 5,
    testcases: [
      { file: 'report-grid.spec.ts',desc: 'Data table with sorting and pagination', status: 'pending' },
      { file: 'export-csv.spec.ts', desc: 'CSV export trigger and download',        status: 'pending' },
      { file: 'chart-render.spec.ts',desc:'Bar/line chart rendering',               status: 'pending' },
      { file: 'filter-panel.spec.ts',desc: 'Column filter panel UI',               status: 'pending' },
      { file: 'row-expand.spec.ts', desc: 'Row expansion details view',             status: 'pending' }
    ],
    baselines: [
      { file: 'data-table.png', size: '310 KB', captured: '2026-06-20' }
    ]
  },
  {
    id: 'b5', name: 'Batch 5', desc: 'Settings & Profile',
    lastRun: '2 days ago', lastUrl: 'https://preprod.myapp.com',
    status: 'fail', pass: 3, fail: 1, total: 4,
    testcases: [
      { file: 'profile-edit.spec.ts',         desc: 'Profile photo and name update',   status: 'pass' },
      { file: 'password-change.spec.ts',       desc: 'Change password flow',            status: 'pass' },
      { file: 'notification-settings.spec.ts', desc: 'Notification preferences UI',    status: 'fail' },
      { file: 'api-keys.spec.ts',              desc: 'API key management page',         status: 'pass' }
    ],
    baselines: [
      { file: 'profile-page.png', size: '155 KB', captured: '2026-06-22' },
      { file: 'settings-main.png',size: '168 KB', captured: '2026-06-22' }
    ]
  }
];

/* Mock comparison results per batch */
var RESULTS = {
  b1: [
    { name: 'Login Page',      file: 'login.spec.ts',          status: 'pass', diff: 0,   duration: '1.2s', updated: false, vOld: '#1E40AF', vNew: '#1E40AF', change: false },
    { name: 'MFA Screen',      file: 'mfa-flow.spec.ts',       status: 'pass', diff: 0,   duration: '2.1s', updated: false, vOld: '#6D28D9', vNew: '#6D28D9', change: false },
    { name: 'Forgot Password', file: 'forgot-password.spec.ts',status: 'pass', diff: 0,   duration: '1.4s', updated: false, vOld: '#0F766E', vNew: '#0F766E', change: false }
  ],
  b2: [
    { name: 'Sidebar Navigation', file: 'sidebar-nav.spec.ts',    status: 'fail', diff: 3.2, duration: '1.8s', updated: false, vOld: '#1E3A8A', vNew: '#111827', change: true, changeDesc: 'Sidebar background changed from blue to dark' },
    { name: 'Dark Mode Toggle',   file: 'dark-mode.spec.ts',       status: 'fail', diff: 7.5, duration: '1.5s', updated: false, vOld: '#F9FAFB', vNew: '#111827', change: true, changeDesc: 'Full page background switched to dark' },
    { name: 'Dashboard Home',     file: 'dashboard-load.spec.ts',  status: 'pass', diff: 0,   duration: '2.2s', updated: false, vOld: '#F9FAFB', vNew: '#F9FAFB', change: false }
  ],
  b3: [
    { name: 'User Create Form',  file: 'user-create.spec.ts',    status: 'pass', diff: 0, duration: '1.9s', updated: false, vOld: '#F3F4F6', vNew: '#F3F4F6', change: false },
    { name: 'Validation Errors', file: 'form-validation.spec.ts',status: 'pass', diff: 0, duration: '1.3s', updated: false, vOld: '#FEF2F2', vNew: '#FEF2F2', change: false }
  ],
  b4: [
    { name: 'Data Table',   file: 'report-grid.spec.ts', status: 'pass', diff: 0,   duration: '2.7s', updated: false, vOld: '#F9FAFB', vNew: '#F9FAFB', change: false },
    { name: 'Chart Render', file: 'chart-render.spec.ts',status: 'fail', diff: 5.1, duration: '3.1s', updated: false, vOld: '#EFF6FF', vNew: '#FFFBEB', change: true, changeDesc: 'Chart accent color changed from blue to amber' }
  ],
  b5: [
    { name: 'Profile Page',          file: 'profile-edit.spec.ts',         status: 'pass', diff: 0,   duration: '1.6s', updated: false, vOld: '#F9FAFB', vNew: '#F9FAFB', change: false },
    { name: 'Notification Settings', file: 'notification-settings.spec.ts',status: 'fail', diff: 2.8, duration: '1.7s', updated: false, vOld: '#EFF6FF', vNew: '#F0FDF4', change: true, changeDesc: 'Toggle accent changed from blue to green' }
  ]
};

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */
var activeBatch     = null;
var currentFilter   = 'all';
var allResultFilter = 'all';

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════════ */
function showView(id) {
  document.querySelectorAll('.view').forEach(function(v) { v.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}
function goHome()       { showView('home-view'); }
function goBatch()      { showView('batch-view'); }
function goResults()    { renderResults(); showView('results-view'); }
function goAllResults() { renderAllResults(); showView('all-results-view'); }

/* ═══════════════════════════════════════════════════════════════
   HOME — render batch cards
═══════════════════════════════════════════════════════════════ */
function renderHome() {
  var g = document.getElementById('batch-grid');
  g.innerHTML = '';
  BATCHES.forEach(function(b) {
    var pc = { pass: 'pill-pass', fail: 'pill-fail', pending: 'pill-pending' }[b.status];
    var pl = { pass: 'All Passing', fail: b.fail + ' Failed', pending: 'Not Run' }[b.status];
    var extra = b.status !== 'pending'
      ? '<button class="btn btn-secondary btn-sm" onclick="quickView(\'' + b.id + '\')">Last Results</button>'
      : '';
    g.innerHTML +=
      '<div class="batch-card">' +
        '<div class="batch-card-header">' +
          '<div><div class="batch-name">' + b.name + '</div><div class="batch-desc">' + b.desc + '</div></div>' +
          '<span class="status-pill ' + pc + '">' + pl + '</span>' +
        '</div>' +
        '<div class="batch-stats">' +
          '<div class="stat-item"><div class="stat-value">' + b.total + '</div><div class="stat-label">Tests</div></div>' +
          '<div class="stat-item"><div class="stat-value" style="color:var(--success)">' + b.pass + '</div><div class="stat-label">Passed</div></div>' +
          '<div class="stat-item"><div class="stat-value" style="color:var(--fail)">' + b.fail + '</div><div class="stat-label">Failed</div></div>' +
        '</div>' +
        '<div class="batch-meta">' +
          '<span>' + b.lastRun + '</span>' +
          '<span>' + b.lastUrl.replace('https://', '') + '</span>' +
        '</div>' +
        '<div class="batch-card-actions">' +
          '<button class="btn btn-primary btn-sm" style="flex:1" onclick="openBatch(\'' + b.id + '\')">Open Batch &rarr;</button>' +
          extra +
        '</div>' +
      '</div>';
  });
}

function quickView(id) {
  activeBatch = id;
  var b = BATCHES.find(function(x) { return x.id === id; });
  document.getElementById('rv-batch-title').textContent = b.name;
  goResults();
}

/* ═══════════════════════════════════════════════════════════════
   RUN ALL BATCHES (NEW)
═══════════════════════════════════════════════════════════════ */
function syncGlobalUrl() {
  var v = document.getElementById('global-env-dropdown').value;
  if (v !== 'custom') document.getElementById('global-url-input').value = v;
  else document.getElementById('global-url-input').focus();
}

function triggerRunAll() {
  var url = document.getElementById('global-url-input').value.trim();
  if (!url) { showToast('Please enter a target URL first'); return; }

  var btn  = document.getElementById('run-all-btn');
  var prog = document.getElementById('global-progress');
  var panel = document.getElementById('run-all-progress');
  var cta   = document.getElementById('run-all-cta');

  btn.disabled = true;
  btn.textContent = 'Running...';
  prog.classList.add('running');
  cta.className = 'results-cta';   /* hide previous CTA */

  /* Build progress rows for each batch */
  var rowsEl = document.getElementById('batch-progress-rows');
  rowsEl.innerHTML = '';
  BATCHES.forEach(function(b) {
    rowsEl.innerHTML +=
      '<div class="batch-progress-row" id="bpr-' + b.id + '">' +
        '<span class="bp-name">' + b.name + '</span>' +
        '<div class="bp-bar-wrap"><div class="bp-bar pending" id="bpbar-' + b.id + '"></div></div>' +
        '<span class="bp-status waiting" id="bpstatus-' + b.id + '">Waiting</span>' +
      '</div>';
  });
  panel.style.display = 'block';
  document.getElementById('run-all-progress-label').textContent = 'Starting...';

  /* Run batches one by one with staggered delay */
  var delay     = 0;
  var totalPass = 0;
  var totalFail = 0;
  var completed = 0;

  BATCHES.forEach(function(b, idx) {
    /* Mark as running after delay */
    setTimeout(function() {
      document.getElementById('run-all-progress-label').textContent =
        'Running ' + b.name + ' (' + (idx + 1) + ' of ' + BATCHES.length + ')...';

      var row = document.getElementById('bpr-' + b.id);
      var bar = document.getElementById('bpbar-' + b.id);
      var sts = document.getElementById('bpstatus-' + b.id);

      row.classList.add('active-row');
      bar.className = 'bp-bar running';
      bar.style.width = '60%';
      sts.className = 'bp-status running';
      sts.textContent = 'Running...';

      /* Mark as done after run duration */
      setTimeout(function() {
        var res    = RESULTS[b.id] || [];
        var failed = res.filter(function(r) { return r.status === 'fail' && !r.updated; }).length;
        var passed = res.length - failed;

        totalPass += passed;
        totalFail += failed;
        completed++;

        row.classList.remove('active-row');

        if (failed > 0) {
          bar.className = 'bp-bar fail';
          sts.className = 'bp-status fail';
          sts.textContent = passed + 'P / ' + failed + 'F';
        } else {
          bar.className = 'bp-bar pass';
          sts.className = 'bp-status pass';
          sts.textContent = passed + ' Passed';
        }

        /* Update the batch card data */
        b.lastUrl = url;
        b.lastRun = 'Just now';
        b.status  = failed > 0 ? 'fail' : 'pass';
        b.pass    = passed;
        b.fail    = failed;

        /* All batches done */
        if (completed === BATCHES.length) {
          prog.classList.remove('running');
          btn.disabled = false;
          btn.textContent = '\u25B6 Run All Batches';
          document.getElementById('run-all-progress-label').textContent =
            'Done \u2014 ' + BATCHES.length + ' batches completed';

          var ctaText = document.getElementById('run-all-cta-text');
          var ctaSub  = document.getElementById('run-all-cta-sub');
          var totalTests = totalPass + totalFail;

          if (totalFail > 0) {
            ctaText.textContent = '\u274C Run complete \u2014 ' + totalFail + ' failure(s) detected';
          } else {
            ctaText.textContent = '\u2705 All batches passed!';
          }
          ctaSub.textContent =
            totalTests + ' total tests \u00B7 ' + totalPass + ' passed \u00B7 ' + totalFail + ' failed';

          cta.className = 'results-cta visible';
          renderHome();
        }
      }, 1800 + idx * 200); /* each batch takes ~1.8s */

    }, delay);

    delay += 2000; /* stagger each batch by 2s */
  });
}

/* ═══════════════════════════════════════════════════════════════
   BATCH DETAIL
═══════════════════════════════════════════════════════════════ */
function openBatch(id) {
  activeBatch = id;
  var b = BATCHES.find(function(x) { return x.id === id; });

  document.getElementById('bv-title').textContent      = b.name;
  document.getElementById('rv-batch-title').textContent = b.name;
  document.getElementById('url-input').value            = b.lastUrl;
  document.getElementById('tc-count').textContent       = b.testcases.length + ' test specs';
  document.getElementById('bl-count').textContent       = b.baselines.length + ' baseline images';
  document.getElementById('tc-path-label').textContent  = 'tests/' + id + '/testcases/';
  document.getElementById('bl-path-label').textContent  = 'tests/' + id + '/baselines/';

  /* Testcases list */
  var tcl = document.getElementById('tc-file-list');
  tcl.innerHTML = b.testcases.map(function(tc) {
    var sc = { pass: 'pill-pass', fail: 'pill-fail', pending: 'pill-pending' }[tc.status];
    var sl = { pass: 'Pass', fail: 'Fail', pending: 'Pending' }[tc.status];
    return '<div class="file-row">' +
      '<div class="file-left">' +
        '<span style="font-size:15px">&#128196;</span>' +
        '<div><div class="file-name">' + tc.file + '</div><div class="file-meta">' + tc.desc + '</div></div>' +
      '</div>' +
      '<span class="status-pill ' + sc + '">' + sl + '</span>' +
    '</div>';
  }).join('');

  /* Baselines list */
  var bll = document.getElementById('bl-file-list');
  bll.innerHTML = b.baselines.map(function(bl) {
    return '<div class="file-row">' +
      '<div class="file-left">' +
        '<span style="font-size:15px">&#128444;</span>' +
        '<div><div class="file-name">' + bl.file + '</div><div class="file-meta">Captured ' + bl.captured + ' &middot; ' + bl.size + '</div></div>' +
      '</div>' +
      '<span class="status-pill pill-pass">Baseline</span>' +
    '</div>';
  }).join('');

  /* Reset state */
  document.getElementById('run-status-bar').className = 'run-status-bar';
  document.getElementById('results-cta').className    = 'results-cta';
  document.getElementById('tc-folder').classList.remove('open');
  document.getElementById('bl-folder').classList.remove('open');

  showView('batch-view');
}

function toggleFolder(id) {
  document.getElementById(id).classList.toggle('open');
}

function syncEnvUrl() {
  var v = document.getElementById('env-dropdown').value;
  if (v !== 'custom') document.getElementById('url-input').value = v;
  else document.getElementById('url-input').focus();
}

/* ═══════════════════════════════════════════════════════════════
   SINGLE BATCH RUN
═══════════════════════════════════════════════════════════════ */
function triggerBatchRun() {
  var url = document.getElementById('url-input').value.trim();
  if (!url) { showToast('Please enter a target URL first'); return; }

  var btn  = document.getElementById('run-btn');
  var sb   = document.getElementById('run-status-bar');
  var prog = document.getElementById('global-progress');

  btn.disabled = true;
  btn.textContent = 'Running...';
  prog.classList.add('running');

  var b = BATCHES.find(function(x) { return x.id === activeBatch; });
  var steps = [
    'Launching Playwright headless browser...',
    'Navigating to ' + url + '...',
    'Running ' + b.testcases.length + ' test specs...',
    'Capturing screenshots...',
    'Comparing against baselines...',
    'Generating report artifacts...'
  ];
  var si = 0;
  sb.className = 'run-status-bar running';
  sb.innerHTML = '<div class="spinner"></div><span id="rst">' + steps[0] + '</span>';

  var iv = setInterval(function() {
    si++;
    if (si < steps.length) {
      var el = document.getElementById('rst');
      if (el) el.textContent = steps[si];
    }
  }, 620);

  setTimeout(function() {
    clearInterval(iv);
    prog.classList.remove('running');
    btn.disabled = false;
    btn.innerHTML = '&#9654; Run Batch';

    var res = RESULTS[activeBatch] || [];
    var fc  = res.filter(function(r) { return r.status === 'fail' && !r.updated; }).length;
    var pc  = res.length - fc;

    if (fc > 0) {
      sb.className = 'run-status-bar done-fail';
      sb.innerHTML = '<span>&#10060;</span><span>' + pc + ' passed, ' + fc + ' failed &mdash; ' + res.length + ' tests done</span>';
    } else {
      sb.className = 'run-status-bar done-pass';
      sb.innerHTML = '<span>&#9989;</span><span>All ' + res.length + ' tests passed</span>';
    }

    var cta = document.getElementById('results-cta');
    cta.className = 'results-cta visible';
    document.getElementById('results-cta-sub').textContent =
      res.length + ' test cases \u00B7 ' + fc + ' diff(s) detected';

    b.lastUrl = url;
    b.lastRun = 'Just now';
    b.status  = fc > 0 ? 'fail' : 'pass';
    b.pass    = pc;
    b.fail    = fc;
    renderHome();
  }, 3800);
}

/* ═══════════════════════════════════════════════════════════════
   SINGLE BATCH RESULTS
═══════════════════════════════════════════════════════════════ */
function renderResults() {
  var res  = RESULTS[activeBatch] || [];
  var pass = res.filter(function(r) { return r.status === 'pass' || r.updated; }).length;
  var fail = res.filter(function(r) { return r.status === 'fail' && !r.updated; }).length;
  var dur  = res.reduce(function(s, r) { return s + parseFloat(r.duration); }, 0).toFixed(1);

  document.getElementById('rs-total').textContent = res.length;
  document.getElementById('rs-pass').textContent  = pass;
  document.getElementById('rs-fail').textContent  = fail;
  document.getElementById('rs-dur').textContent   = dur + 's';

  currentFilter = 'all';
  document.querySelectorAll('#results-view .filter-tab').forEach(function(t, i) {
    t.classList.toggle('active', i === 0);
  });
  renderList(res, 'all', 'comparison-list', activeBatch);
}

function filterResults(f, el) {
  currentFilter = f;
  document.querySelectorAll('#results-view .filter-tab').forEach(function(t) { t.classList.remove('active'); });
  el.classList.add('active');
  renderList(RESULTS[activeBatch] || [], f, 'comparison-list', activeBatch);
}

/* ═══════════════════════════════════════════════════════════════
   ALL BATCHES CONSOLIDATED RESULTS (NEW)
═══════════════════════════════════════════════════════════════ */
function renderAllResults() {
  var totalPass  = 0;
  var totalFail  = 0;
  var totalTests = 0;
  var totalDur   = 0;
  var batchesRun = 0;

  BATCHES.forEach(function(b) {
    var res = RESULTS[b.id] || [];
    if (!res.length) return;
    batchesRun++;
    res.forEach(function(r) {
      totalTests++;
      totalDur += parseFloat(r.duration);
      if (r.status === 'pass' || r.updated) totalPass++;
      else totalFail++;
    });
  });

  document.getElementById('ar-total').textContent   = totalTests;
  document.getElementById('ar-pass').textContent    = totalPass;
  document.getElementById('ar-fail').textContent    = totalFail;
  document.getElementById('ar-batches').textContent = batchesRun;
  document.getElementById('ar-dur').textContent     = totalDur.toFixed(1) + 's';

  allResultFilter = 'all';
  document.querySelectorAll('#all-results-view .filter-tab').forEach(function(t, i) {
    t.classList.toggle('active', i === 0);
  });
  renderAllList('all');
}

function filterAllResults(f, el) {
  allResultFilter = f;
  document.querySelectorAll('#all-results-view .filter-tab').forEach(function(t) { t.classList.remove('active'); });
  el.classList.add('active');
  renderAllList(f);
}

function renderAllList(filter) {
  var container = document.getElementById('all-comparison-list');
  container.innerHTML = '';

  BATCHES.forEach(function(b) {
    var res = RESULTS[b.id] || [];
    if (!res.length) return;

    var filtered = res;
    if (filter === 'pass')    filtered = res.filter(function(r) { return (r.status === 'pass' || r.updated); });
    if (filter === 'fail')    filtered = res.filter(function(r) { return r.status === 'fail' && !r.updated; });
    if (filter === 'updated') filtered = res.filter(function(r) { return r.updated; });
    if (!filtered.length) return;

    /* Batch group header */
    var batchPass = res.filter(function(r) { return r.status === 'pass' || r.updated; }).length;
    var batchFail = res.filter(function(r) { return r.status === 'fail' && !r.updated; }).length;
    var pillCls   = batchFail > 0 ? 'pill-fail' : 'pill-pass';
    var pillTxt   = batchFail > 0 ? batchFail + ' Failed' : 'All Passing';

    container.innerHTML +=
      '<div class="batch-group-header">' +
        '<span>' + b.name + ' &mdash; ' + b.desc + '</span>' +
        '<div class="batch-group-pills">' +
          '<span class="status-pill ' + pillCls + '">' + pillTxt + '</span>' +
          '<button class="btn btn-outline-accent btn-sm" onclick="quickView(\'' + b.id + '\'); goResults()">View Detail</button>' +
        '</div>' +
      '</div>';

    /* Render each comparison card for this batch */
    filtered.forEach(function(r) {
      var gi = res.indexOf(r);
      container.innerHTML += buildComparisonCard(r, gi, b.id);
    });
  });

  if (!container.innerHTML) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">No results match this filter across all batches</div>';
  }
}

/* ═══════════════════════════════════════════════════════════════
   SHARED — comparison card builder
═══════════════════════════════════════════════════════════════ */
function mockPage(color, hasDiff, diffColor) {
  var nav  = '<div style="background:' + color + ';height:28px;border-radius:3px;margin-bottom:8px;display:flex;align-items:center;padding:0 8px;gap:6px">' +
    '<span style="height:6px;width:36px;background:rgba(255,255,255,0.5);border-radius:3px;display:inline-block"></span>' +
    '<span style="height:6px;width:28px;background:rgba(255,255,255,0.3);border-radius:3px;display:inline-block"></span>' +
  '</div>';
  var body = '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">' +
    '<div style="background:#F3F4F6;border-radius:4px;padding:6px"><div style="height:5px;background:#E5E7EB;border-radius:2px;margin-bottom:4px"></div><div style="height:12px;background:#D1D5DB;border-radius:2px"></div></div>' +
    '<div style="background:#F3F4F6;border-radius:4px;padding:6px"><div style="height:5px;background:#E5E7EB;border-radius:2px;margin-bottom:4px"></div><div style="height:12px;background:#D1D5DB;border-radius:2px"></div></div>' +
    '<div style="background:' + (hasDiff ? diffColor : '#F3F4F6') + ';border-radius:4px;padding:6px"><div style="height:5px;background:#E5E7EB;border-radius:2px;margin-bottom:4px"></div><div style="height:12px;background:#D1D5DB;border-radius:2px"></div></div>' +
  '</div>';
  return '<div class="mock-browser-bar">' +
    '<div class="mock-dot" style="background:#FF5F57"></div>' +
    '<div class="mock-dot" style="background:#FFBD2E"></div>' +
    '<div class="mock-dot" style="background:#28CA41"></div>' +
    '<div class="mock-url-bar"></div>' +
  '</div><div class="mock-page">' + nav + body + '</div>';
}

function buildComparisonCard(r, gi, batchId) {
  var isFail   = r.status === 'fail' && !r.updated;
  var pill     = r.updated
    ? '<span class="status-pill pill-pass">Updated Baseline</span>'
    : isFail
      ? '<span class="status-pill pill-fail">Failed &middot; ' + r.diff + '% diff</span>'
      : '<span class="status-pill pill-pass">Passed</span>';
  var oldMock  = mockPage(r.vOld, false, '');
  var newMock  = mockPage(r.vNew, isFail && r.change, isFail && r.change ? r.vNew + '44' : '');
  var diffOver = isFail
    ? '<div class="diff-overlay"><div class="diff-highlight" style="top:28%;left:55%;width:38%;height:35%"></div></div>'
    : '';
  var diffInfo = isFail
    ? 'Pixel diff: <strong>' + r.diff + '%</strong> &mdash; ' + r.changeDesc
    : '<strong>No visual difference</strong> &mdash; Perfect match';
  var acts = isFail && !r.updated
    ? '<button class="btn btn-secondary btn-sm" onclick="ignoreDiff()">Ignore</button>' +
      '<button class="btn btn-success btn-sm" onclick="updateBaseline(' + gi + ',\'' + batchId + '\')">Update Baseline</button>'
    : r.updated
      ? '<button class="btn btn-secondary btn-sm" disabled>Baseline Updated</button>'
      : '<button class="btn btn-outline-accent btn-sm" onclick="updateBaseline(' + gi + ',\'' + batchId + '\')">Replace Baseline</button>';

  return '<div class="comparison-card">' +
    '<div class="comparison-header">' +
      '<div><div class="comparison-title">' + r.name + '</div><div class="comparison-path">' + r.file + ' &middot; ' + r.duration + '</div></div>' +
      '<div class="comparison-meta">' + pill + '</div>' +
    '</div>' +
    '<div class="comparison-body">' +
      '<div class="screenshot-pane"><div class="screenshot-pane-label label-existing">Existing Baseline</div><div class="screenshot-mock">' + oldMock + '</div></div>' +
      '<div class="screenshot-pane"><div class="screenshot-pane-label label-latest">Latest Capture</div><div class="screenshot-mock">' + newMock + diffOver + '</div></div>' +
    '</div>' +
    '<div class="comparison-footer">' +
      '<div class="diff-stats">' + diffInfo + '</div>' +
      '<div class="footer-actions">' + acts + '</div>' +
    '</div>' +
  '</div>';
}

function renderList(res, filter, containerId, batchId) {
  var list     = document.getElementById(containerId);
  list.innerHTML = '';
  var filtered = res;
  if (filter === 'pass')    filtered = res.filter(function(r) { return r.status === 'pass' && !r.updated; });
  if (filter === 'fail')    filtered = res.filter(function(r) { return r.status === 'fail' && !r.updated; });
  if (filter === 'updated') filtered = res.filter(function(r) { return r.updated; });

  if (!filtered.length) {
    list.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">No results match this filter</div>';
    return;
  }
  filtered.forEach(function(r) {
    var gi = res.indexOf(r);
    list.innerHTML += buildComparisonCard(r, gi, batchId);
  });
}

/* ═══════════════════════════════════════════════════════════════
   ACTIONS
═══════════════════════════════════════════════════════════════ */
function updateBaseline(idx, batchId) {
  var bid = batchId || activeBatch;
  var res = RESULTS[bid];
  if (!res || !res[idx]) return;
  res[idx].status  = 'pass';
  res[idx].updated = true;
  res[idx].diff    = 0;
  res[idx].vOld    = res[idx].vNew;
  res[idx].change  = false;
  showToast('Baseline updated for "' + res[idx].name + '"');
  /* Re-render whichever view is currently active */
  if (document.getElementById('results-view').classList.contains('active'))     renderResults();
  if (document.getElementById('all-results-view').classList.contains('active')) renderAllResults();
}

function ignoreDiff() {
  showToast('Diff ignored for this run');
}

/* ═══════════════════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════════════════ */
function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2800);
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
renderHome();
