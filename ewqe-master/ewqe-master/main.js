function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth'
    });

    reset = 0
    var progressBar_SQL = document.getElementById('progress');
    progressBar_SQL.style.width = reset + '%';

    var progressBar_CS = document.getElementById('progress1');
    progressBar_CS.style.width = reset + '%';

    var progressBar_HTML = document.getElementById('progress2');
    progressBar_HTML.style.width = reset + '%';

    var progressBar_HTML = document.getElementById('progress3');
    progressBar_HTML.style.width = reset + '%';

    var progressBar_HTML = document.getElementById('progress4');
    progressBar_HTML.style.width = reset + '%';

    var progressBar_HTML = document.getElementById('progress5');
    progressBar_HTML.style.width = reset + '%';
    
    var progressBar_HTML = document.getElementById('progress6');
    progressBar_HTML.style.width = reset + '%';
    
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


function updateProgressBar() {

    sql_skill = 66;
    cs_skill = 50;
    html_skill = 66;
    css_skill = 50;
    js_skill = 40;
    database_skill = 70;
    python_skill = 30;

    var progressBar_SQL = document.getElementById('progress');
    progressBar_SQL.style.width = sql_skill + '%';

    var progressBar_CS = document.getElementById('progress1');
    progressBar_CS.style.width = cs_skill + '%';

    var progressBar_HTML = document.getElementById('progress2');
    progressBar_HTML.style.width = html_skill + '%';

    var progressBar_HTML = document.getElementById('progress3');
    progressBar_HTML.style.width = css_skill + '%';

    var progressBar_HTML = document.getElementById('progress4');
    progressBar_HTML.style.width = js_skill + '%';

    var progressBar_HTML = document.getElementById('progress5');
    progressBar_HTML.style.width = database_skill + '%';

    var progressBar_HTML = document.getElementById('progress6');
    progressBar_HTML.style.width = python_skill + '%';
    
  }
