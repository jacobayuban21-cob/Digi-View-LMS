/* =====================================================
   DIGI-VIEW LMS
   JavaScript
===================================================== */


/* ================= DATA ================= */

const DEMO_USER = {
    username: "student",
    password: "1234",
    xp: 0,
    score: 0,
    level: 1,
    unlocked: ["easy"],
    history: [],
    achievements: []
};


/* ================= QUESTION BANK ================= */

const questionBank = [

    {
        q: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0,
        difficulty: "easy"
    },

    {
        q: "Which element contains the visible content of a webpage?",
        options: [
            "<head>",
            "<body>",
            "<title>",
            "<meta>"
        ],
        answer: 1,
        difficulty: "easy"
    },

    {
        q: "Which HTML element is used for the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        answer: 2,
        difficulty: "easy"
    },

    {
        q: "Which tag creates a paragraph?",
        options: [
            "<paragraph>",
            "<p>",
            "<para>",
            "<text>"
        ],
        answer: 1,
        difficulty: "easy"
    },

    {
        q: "Which tag creates a line break?",
        options: [
            "<break>",
            "<lb>",
            "<br>",
            "<newline>"
        ],
        answer: 2,
        difficulty: "easy"
    },

    {
        q: "Which element is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1,
        difficulty: "easy"
    },

    {
        q: "Which attribute specifies the destination of a hyperlink?",
        options: [
            "src",
            "link",
            "href",
            "target"
        ],
        answer: 2,
        difficulty: "easy"
    },

    {
        q: "Which element is used to display an image?",
        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        answer: 1,
        difficulty: "easy"
    },

    {
        q: "Which attribute provides alternative text for an image?",
        options: [
            "alt",
            "text",
            "title",
            "description"
        ],
        answer: 0,
        difficulty: "easy"
    },

    {
        q: "Which element creates an unordered list?",
        options: [
            "<ol>",
            "<list>",
            "<ul>",
            "<li>"
        ],
        answer: 2,
        difficulty: "easy"
    },

    {
        q: "Which element creates an ordered list?",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<order>"
        ],
        answer: 0,
        difficulty: "easy"
    },

    {
        q: "Which tag represents a list item?",
        options: [
            "<item>",
            "<li>",
            "<list>",
            "<ul>"
        ],
        answer: 1,
        difficulty: "easy"
    },

    {
        q: "Where is the webpage title normally placed?",
        options: [
            "Inside <body>",
            "Inside <head>",
            "Inside <footer>",
            "Inside <main>"
        ],
        answer: 1,
        difficulty: "easy"
    },

    {
        q: "Which tag is used to create a table?",
        options: [
            "<table>",
            "<tab>",
            "<grid>",
            "<data>"
        ],
        answer: 0,
        difficulty: "easy"
    },

    {
        q: "Which tag creates a table row?",
        options: [
            "<td>",
            "<th>",
            "<tr>",
            "<row>"
        ],
        answer: 2,
        difficulty: "easy"
    },

    {
        q: "Which tag creates a table header cell?",
        options: [
            "<header>",
            "<th>",
            "<head>",
            "<td>"
        ],
        answer: 1,
        difficulty: "medium"
    },

    {
        q: "Which tag creates a normal table data cell?",
        options: [
            "<cell>",
            "<data>",
            "<td>",
            "<tr>"
        ],
        answer: 2,
        difficulty: "medium"
    },

    {
        q: "Which element is commonly used to create a form?",
        options: [
            "<input>",
            "<form>",
            "<field>",
            "<submit>"
        ],
        answer: 1,
        difficulty: "medium"
    },

    {
        q: "Which element allows the user to enter text?",
        options: [
            "<input>",
            "<text>",
            "<write>",
            "<enter>"
        ],
        answer: 0,
        difficulty: "medium"
    },

    {
        q: "Which element provides a caption or name for a form control?",
        options: [
            "<label>",
            "<name>",
            "<caption>",
            "<formname>"
        ],
        answer: 0,
        difficulty: "medium"
    },

    {
        q: "Which element can be used as a button?",
        options: [
            "<click>",
            "<button>",
            "<btn>",
            "<press>"
        ],
        answer: 1,
        difficulty: "medium"
    },

    {
        q: "Which of these is a block-level element?",
        options: [
            "<span>",
            "<a>",
            "<div>",
            "<strong>"
        ],
        answer: 2,
        difficulty: "medium"
    },

    {
        q: "Which element is generally used as an inline container?",
        options: [
            "<div>",
            "<section>",
            "<span>",
            "<article>"
        ],
        answer: 2,
        difficulty: "medium"
    },

    {
        q: "What is the main purpose of the <head> element?",
        options: [
            "Display the main webpage content",
            "Contain metadata and document information",
            "Create a navigation bar",
            "Display images"
        ],
        answer: 1,
        difficulty: "medium"
    },

    {
        q: "Which declaration tells the browser that the document uses HTML5?",
        options: [
            "<html5>",
            "<doctype html>",
            "<!DOCTYPE html>",
            "<HTML5>"
        ],
        answer: 2,
        difficulty: "hard"
    },

    {
        q: "Which attribute is commonly used to uniquely identify an element?",
        options: [
            "class",
            "id",
            "name",
            "unique"
        ],
        answer: 1,
        difficulty: "hard"
    },

    {
        q: "Which attribute can assign one or more classes to an element?",
        options: [
            "style",
            "class",
            "group",
            "type"
        ],
        answer: 1,
        difficulty: "hard"
    },

    {
        q: "Which element represents the main content of a document?",
        options: [
            "<content>",
            "<main>",
            "<body-content>",
            "<primary>"
        ],
        answer: 1,
        difficulty: "hard"
    },

    {
        q: "Which element is commonly used for navigation links?",
        options: [
            "<navigation>",
            "<nav>",
            "<menu-bar>",
            "<links>"
        ],
        answer: 1,
        difficulty: "hard"
    },

    {
        q: "Which element represents a footer for a page or section?",
        options: [
            "<bottom>",
            "<footer>",
            "<end>",
            "<foot>"
        ],
        answer: 1,
        difficulty: "hard"
    }
];


/* ================= LESSONS ================= */

const lessons = [

    {
        title: "HTML Basics",
        icon: "🌐",
        description: "Learn what HTML is and understand the basic structure of a webpage.",
        code:
`<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Welcome!</p>
</body>
</html>`
    },

    {
        title: "Headings & Paragraphs",
        icon: "📝",
        description: "Learn how headings and paragraphs organize webpage content.",
        code:
`<h1>My Website</h1>
<h2>About Me</h2>

<p>
    This is a paragraph.
</p>`
    },

    {
        title: "Links",
        icon: "🔗",
        description: "Learn how to connect webpages using hyperlinks.",
        code:
`<a href="https://example.com">
    Visit Website
</a>`
    },

    {
        title: "Images",
        icon: "🖼️",
        description: "Learn how to display images using the img element.",
        code:
`<img
    src="picture.jpg"
    alt="My picture"
>`
    },

    {
        title: "Lists",
        icon: "📋",
        description: "Learn how to create ordered and unordered lists.",
        code:
`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<ol>
    <li>First</li>
    <li>Second</li>
</ol>`
    },

    {
        title: "HTML Tables",
        icon: "📊",
        description: "Learn how rows, headers, and data cells work in tables.",
        code:
`<table>
    <tr>
        <th>Name</th>
        <th>Score</th>
    </tr>

    <tr>
        <td>Juan</td>
        <td>90</td>
    </tr>
</table>`
    },

    {
        title: "HTML Forms",
        icon: "📝",
        description: "Learn how forms collect information from users.",
        code:
`<form>

    <label>Username</label>

    <input
        type="text"
        placeholder="Enter username"
    >

    <button>
        Submit
    </button>

</form>`
    },

    {
        title: "Block-Level Elements",
        icon: "🧱",
        description: "Understand block-level elements such as div, p, and headings.",
        code:
`<div>
    <h2>Profile</h2>

    <p>
        This is a block-level section.
    </p>
</div>`
    }
];


/* ================= STATE ================= */

let currentUser = null;

let currentQuiz = [];

let currentQuestionIndex = 0;

let quizScore = 0;

let quizHearts = 5;

let quizCombo = 0;

let selectedDifficulty = "easy";

let answered = false;


/* ================= DOM ================= */

const authPage = document.getElementById("authPage");
const app = document.getElementById("app");

const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");

const pageContent = document.getElementById("pageContent");

const pageTitle = document.getElementById("pageTitle");

const quizModal = document.getElementById("quizModal");


/* ================= STORAGE ================= */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("digiViewUsers") || "[]"
    );
}

function saveUsers(users) {

    localStorage.setItem(
        "digiViewUsers",
        JSON.stringify(users)
    );
}

function saveCurrentUser() {

    const users = getUsers();

    const index = users.findIndex(
        user => user.username === currentUser.username
    );

    if (index !== -1) {

        users[index] = currentUser;

    } else {

        users.push(currentUser);
    }

    saveUsers(users);

    localStorage.setItem(
        "digiViewSession",
        currentUser.username
    );
}


/* ================= INITIALIZE ================= */

function initialize() {

    const users = getUsers();

    if (!users.some(u => u.username === "student")) {

        users.push({
            ...DEMO_USER
        });

        saveUsers(users);
    }

    const session =
        localStorage.getItem("digiViewSession");

    if (session) {

        const user = users.find(
            u => u.username === session
        );

        if (user) {

            currentUser = user;

            showApp();

            return;
        }
    }

    showAuth();
}

initialize();


/* ================= AUTH ================= */

function showAuth() {

    authPage.classList.remove("hidden");

    app.classList.add("hidden");
}

function showApp() {

    authPage.classList.add("hidden");

    app.classList.remove("hidden");

    updateUserUI();

    showPage("dashboard");
}


/* ================= LOGIN ================= */

document.getElementById("loginForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const username =
            document.getElementById("loginUsername")
                .value.trim();

        const password =
            document.getElementById("loginPassword")
                .value;

        const users = getUsers();

        const user = users.find(
            u =>
                u.username.toLowerCase() ===
                username.toLowerCase() &&
                u.password === password
        );

        if (!user) {

            showToast(
                "Invalid username or password.",
                "⚠️"
            );

            return;
        }

        currentUser = user;

        saveCurrentUser();

        showApp();

        showToast(
            "Welcome back, " + user.username + "!",
            "👋"
        );
    });


/* ================= SIGN UP ================= */

document.getElementById("signupForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const fullName =
            document.getElementById("signupFullName")
                .value.trim();

        const age =
            document.getElementById("signupAge")
                .value;

        const gender =
            document.getElementById("signupGender")
                .value;

        const strand =
            document.getElementById("signupStrand")
                .value.trim();

        const gradeSection =
            document.getElementById("signupGradeSection")
                .value.trim();

        const username =
            document.getElementById("signupUsername")
                .value.trim();

        const password =
            document.getElementById("signupPassword")
                .value;

        const confirm =
            document.getElementById("signupConfirm")
                .value;


        /* ================= VALIDATION ================= */

        if (fullName.length < 2) {

            showToast(
                "Please enter your full name.",
                "⚠️"
            );

            return;
        }


        if (!age || Number(age) < 1) {

            showToast(
                "Please enter your age.",
                "⚠️"
            );

            return;
        }


        if (!gender) {

            showToast(
                "Please select your gender.",
                "⚠️"
            );

            return;
        }


        if (strand.length < 2) {

            showToast(
                "Please enter your strand.",
                "⚠️"
            );

            return;
        }


        if (gradeSection.length < 2) {

            showToast(
                "Please enter your Grade & Section.",
                "⚠️"
            );

            return;
        }


        if (username.length < 3) {

            showToast(
                "Username must be at least 3 characters.",
                "⚠️"
            );

            return;
        }


        if (password.length < 4) {

            showToast(
                "Password must be at least 4 characters.",
                "⚠️"
            );

            return;
        }


        if (password !== confirm) {

            showToast(
                "Passwords do not match.",
                "⚠️"
            );

            return;
        }


        /* ================= CHECK USERNAME ================= */

        const users = getUsers();

        if (
            users.some(
                u =>
                    u.username.toLowerCase() ===
                    username.toLowerCase()
            )
        ) {

            showToast(
                "Username already exists.",
                "⚠️"
            );

            return;
        }


        /* ================= CREATE ACCOUNT ================= */

        currentUser = {

            fullName: fullName,

            age: age,

            gender: gender,

            strand: strand,

            gradeSection: gradeSection,

            username: username,

            password: password,

            xp: 0,

            score: 0,

            level: 1,

            unlocked: ["easy"],

            history: [],

            achievements: []

        };


        users.push(currentUser);

        saveUsers(users);


        localStorage.setItem(
            "digiViewSession",
            username
        );


        showApp();


        showToast(
            "Account created successfully!",
            "🎉"
        );

    });


/* ================= SWITCH AUTH ================= */

document.getElementById("showSignup")
    .addEventListener("click", () => {

        loginBox.classList.add("hidden");

        signupBox.classList.remove("hidden");

    });


document.getElementById("showLogin")
    .addEventListener("click", () => {

        signupBox.classList.add("hidden");

        loginBox.classList.remove("hidden");

    });


/* ================= LOGOUT ================= */

document.getElementById("logoutBtn")
    .addEventListener("click", () => {

        localStorage.removeItem(
            "digiViewSession"
        );

        currentUser = null;

        showAuth();

        showToast(
            "You have been logged out.",
            "👋"
        );
    });


/* ================= NAVIGATION ================= */

document.querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".nav-item")
                .forEach(item =>
                    item.classList.remove("active")
                );

            button.classList.add("active");

            showPage(
                button.dataset.page
            );
        });

    });


function showPage(page) {

    const titles = {

        dashboard: "Dashboard",

        lessons: "HTML Lessons",

        quiz: "HTML Quiz",

        achievements: "Achievements",

        history: "Quiz History",

        profile: "My Profile"
    };

    pageTitle.textContent =
        titles[page] || "Digi-View";

    if (page === "dashboard")
        renderDashboard();

    if (page === "lessons")
        renderLessons();

    if (page === "quiz")
        renderQuizSelection();

    if (page === "achievements")
        renderAchievements();

    if (page === "history")
        renderHistory();

    if (page === "profile")
        renderProfile();
}


/* ================= USER UI ================= */

function updateUserUI() {

    const username =
        currentUser.username;

    const initial =
        username.charAt(0).toUpperCase();

    document.getElementById("sideUsername")
        .textContent = username;

    document.getElementById("sideAvatar")
        .textContent = initial;

    document.getElementById("topAvatar")
        .textContent = initial;

    document.getElementById("topXP")
        .textContent =
        currentUser.xp + " XP";

    document.getElementById("sideLevel")
        .textContent =
        "Level " + calculateLevel();
}


/* ================= LEVEL ================= */

function calculateLevel() {

    return Math.floor(
        currentUser.xp / 100
    ) + 1;
}

function getLevelProgress() {

    return currentUser.xp % 100;
}


/* ================= DASHBOARD ================= */

function renderDashboard() {

    const totalQuizzes =
        currentUser.history.length;

    const passed =
        currentUser.history
            .filter(item => item.passed)
            .length;

    const average =
        totalQuizzes
            ? Math.round(
                currentUser.history
                    .reduce(
                        (sum, item) =>
                            sum + item.percentage,
                        0
                    ) / totalQuizzes
            )
            : 0;

    const level =
        calculateLevel();

    const progress =
        getLevelProgress();

    pageContent.innerHTML = `

        <div class="hero">

            <h1>
                Welcome,
                <span>${escapeHTML(currentUser.username)}</span>! 👋
            </h1>

            <p>
                Keep learning, complete your HTML lessons,
                and challenge yourself with the quiz.
                Your goal is not just to memorize HTML—
                it's to understand how it works.
            </p>

            <div class="hero-buttons">

                <button
                    class="primary-btn"
                    onclick="openQuiz('easy')"
                >
                    🚀 Start Learning
                </button>

                <button
                    class="secondary-btn"
                    onclick="showPage('lessons')"
                >
                    📚 View Lessons
                </button>

            </div>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-icon">
                    ⚡
                </div>

                <small>Total XP</small>

                <strong>
                    ${currentUser.xp}
                </strong>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    🎯
                </div>

                <small>Average Score</small>

                <strong>
                    ${average}%
                </strong>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    📝
                </div>

                <small>Quizzes Taken</small>

                <strong>
                    ${totalQuizzes}
                </strong>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    🏆
                </div>

                <small>Quizzes Passed</small>

                <strong>
                    ${passed}
                </strong>

            </div>

        </div>


        <div class="section-title">

            <h2>Your Learning Level</h2>

            <span>
                Level ${level}
            </span>

        </div>


        <div class="progress-box">

            <div class="progress-info">

                <span>
                    Progress to Level ${level + 1}
                </span>

                <strong>
                    ${progress}/100 XP
                </strong>

            </div>

            <div class="progress">

                <div style="width:${progress}%"></div>

            </div>

        </div>


        <div class="section-title">

            <h2>Choose Your Challenge</h2>

            <span>
                Unlock harder levels by passing
            </span>

        </div>


        <div class="level-grid">

            ${levelCard(
                "easy",
                "🌱",
                "Easy",
                "Build your HTML foundation.",
                true
            )}

            ${levelCard(
                "medium",
                "⚡",
                "Medium",
                "Test your understanding of HTML.",
                currentUser.unlocked.includes("medium")
            )}

            ${levelCard(
                "hard",
                "🔥",
                "Hard",
                "Challenge your HTML knowledge.",
                currentUser.unlocked.includes("hard")
            )}

        </div>

    `;
}


/* ================= LEVEL CARD ================= */

function levelCard(
    difficulty,
    icon,
    title,
    description,
    unlocked
) {

    if (!unlocked) {

        return `

            <div class="level-card locked">

                <span class="lock-label">
                    🔒 Locked
                </span>

                <div class="level-icon">
                    ${icon}
                </div>

                <h3>${title}</h3>

                <p>
                    ${description}
                </p>

                <button
                    class="secondary-btn"
                    disabled
                    style="width:100%"
                >
                    Pass previous level
                </button>

            </div>

        `;
    }

    return `

        <div class="level-card">

            <div class="level-icon">
                ${icon}
            </div>

            <h3>${title}</h3>

            <p>
                ${description}
            </p>

            <button
                class="primary-btn"
                onclick="openQuiz('${difficulty}')"
            >
                Start ${title} →
            </button>

        </div>

    `;
}


/* ================= LESSONS ================= */

function renderLessons() {

    pageContent.innerHTML = `

        <div class="section-title">

            <div>
                <h2>HTML Learning Center</h2>

                <span>
                    Learn the concept before taking the challenge.
                </span>
            </div>

        </div>


        <div class="lesson-grid">

            ${lessons.map((lesson, index) => `

                <div class="lesson-card">

                    <div class="lesson-number">
                        LESSON ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="lesson-number"
                         style="font-size:30px">
                        ${lesson.icon}
                    </div>

                    <h3>
                        ${lesson.title}
                    </h3>

                    <p>
                        ${lesson.description}
                    </p>

                    <div class="code-preview">
                        ${escapeHTML(
                            lesson.code
                                .split("\n")
                                .slice(0,4)
                                .join("\n")
                        )}
                    </div>

                    <button
                        class="primary-btn"
                        onclick="openLesson(${index})"
                    >
                        Learn More →
                    </button>

                </div>

            `).join("")}

        </div>

    `;
}


/* ================= OPEN LESSON ================= */

function openLesson(index) {

    const lesson =
        lessons[index];

    pageContent.innerHTML = `

        <div class="lesson-detail">

            <button
                class="secondary-btn"
                onclick="renderLessons()"
            >
                ← Back to Lessons
            </button>


            <div class="lesson-detail-card"
                 style="margin-top:20px">

                <div class="lesson-number">
                    LESSON ${String(index + 1).padStart(2, "0")}
                </div>

                <h2>
                    ${lesson.icon}
                    ${lesson.title}
                </h2>

                <p>
                    ${lesson.description}
                </p>

                <div class="lesson-code">
${escapeHTML(lesson.code)}
                </div>


                <div class="try-box">

                    <h3>
                        💡 Quick Challenge
                    </h3>

                    <p>
                        Read the example carefully,
                        then test what you learned
                        in the quiz.
                    </p>

                    <button
                        class="primary-btn"
                        onclick="openQuiz('easy')"
                    >
                        Take a Quiz →
                    </button>

                </div>

            </div>

        </div>

    `;
}


/* ================= QUIZ SELECTION ================= */

function renderQuizSelection() {

    pageContent.innerHTML = `

        <div class="hero">

            <h1>
                Ready for the
                <span>HTML Challenge?</span> 🧠
            </h1>

            <p>
                Choose a difficulty and test your
                knowledge. Be careful—wrong answers
                cost one heart.
            </p>

        </div>


        <div class="level-grid">

            ${levelCard(
                "easy",
                "🌱",
                "Easy",
                "25 questions • Foundation",
                true
            )}

            ${levelCard(
                "medium",
                "⚡",
                "Medium",
                "30 questions • Understanding",
                currentUser.unlocked.includes("medium")
            )}

            ${levelCard(
                "hard",
                "🔥",
                "Hard",
                "30 questions • Application",
                currentUser.unlocked.includes("hard")
            )}

        </div>


        <div class="progress-box"
             style="margin-top:25px">

            <h3 style="margin-bottom:10px">
                🎯 Passing Score
            </h3>

            <p style="color:var(--muted);line-height:1.7">
                You need at least <strong>80%</strong>
                to pass a level and unlock the next
                difficulty.
            </p>

        </div>

    `;
}


/* ================= OPEN QUIZ ================= */

function openQuiz(difficulty) {

    if (
        difficulty !== "easy" &&
        !currentUser.unlocked.includes(difficulty)
    ) {

        showToast(
            "This level is still locked.",
            "🔒"
        );

        return;
    }

    selectedDifficulty =
        difficulty;

    const targetCount =
        difficulty === "easy"
            ? 25
            : 30;

    let available =
        questionBank.filter(
            q => q.difficulty === difficulty
        );

    /*
       Add questions from the full bank if the
       difficulty does not contain enough questions.
    */

    if (available.length < targetCount) {

        const extra =
            questionBank.filter(
                q =>
                    !available.includes(q)
            );

        available = [
            ...available,
            ...extra
        ];
    }

    available =
        shuffle(
            [...available]
        ).slice(
            0,
            Math.min(
                targetCount,
                available.length
            )
        );

    currentQuiz =
        available;

    currentQuestionIndex = 0;

    quizScore = 0;

    quizHearts = 5;

    quizCombo = 0;

    answered = false;

    quizModal.classList.remove("hidden");

    document.getElementById("quizDifficulty")
        .textContent =
        difficulty.charAt(0).toUpperCase()
        + difficulty.slice(1)
        + " Quiz";

    showQuestion();
}


/* ================= SHOW QUESTION ================= */

function showQuestion() {

    if (
        currentQuestionIndex >=
        currentQuiz.length
    ) {

        finishQuiz();

        return;
    }

    answered = false;

    const question =
        currentQuiz[
            currentQuestionIndex
        ];

    document.getElementById("currentQuestion")
        .textContent =
        currentQuestionIndex + 1;

    document.getElementById("totalQuestions")
        .textContent =
        currentQuiz.length;

    document.getElementById("questionNumber")
        .textContent =
        "QUESTION " +
        String(
            currentQuestionIndex + 1
        ).padStart(2, "0");

    document.getElementById("questionText")
        .textContent =
        question.q;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-btn";

            button.textContent =
                option;

            button.addEventListener(
                "click",
                () =>
                    answerQuestion(
                        index,
                        button
                    )
            );

            answers.appendChild(button);
        }
    );


    document.getElementById("quizFeedback")
        .textContent = "";

    document.getElementById("nextQuestion")
        .classList.add("hidden");


    updateQuizStats();

    const progress =
        (
            currentQuestionIndex /
            currentQuiz.length
        ) * 100;

    document.getElementById(
        "quizProgressBar"
    ).style.width =
        progress + "%";
}


/* ================= ANSWER ================= */

function answerQuestion(
    selected,
    button
) {

    if (answered) return;

    answered = true;

    const question =
        currentQuiz[
            currentQuestionIndex
        ];

    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );

    buttons.forEach(
        b => b.disabled = true
    );


    if (selected === question.answer) {

        button.classList.add("correct");

        quizScore++;

        quizCombo++;

        document.getElementById(
            "quizFeedback"
        ).innerHTML =
            `<strong style="color:#22c55e">
                Correct! +1 point 🎉
            </strong>`;

        if (quizCombo >= 3) {

            showToast(
                `${quizCombo} correct in a row! 🔥`,
                "🔥"
            );
        }

    } else {

        button.classList.add("wrong");

        quizHearts--;

        quizCombo = 0;

        /*
            IMPORTANT:
            The correct answer is NOT shown.
        */

        document.getElementById(
            "quizFeedback"
        ).innerHTML =
            `<span style="color:#f87171">
                Incorrect. -1 heart.
                Review the lesson and try again.
            </span>`;


        if (quizHearts <= 0) {

            setTimeout(
                finishQuiz,
                900
            );

            updateQuizStats();

            return;
        }
    }


    updateQuizStats();

    document.getElementById(
        "nextQuestion"
    ).classList.remove("hidden");
}


/* ================= NEXT ================= */

document.getElementById("nextQuestion")
    .addEventListener(
        "click",
        () => {

            currentQuestionIndex++;

            showQuestion();

        }
    );


/* ================= QUIZ STATS ================= */

function updateQuizStats() {

    document.getElementById("quizScore")
        .textContent =
        quizScore;

    document.getElementById("quizCombo")
        .textContent =
        quizCombo + " 🔥";

    document.getElementById("quizHearts")
        .textContent =
        "❤️".repeat(quizHearts) +
        "🖤".repeat(
            5 - quizHearts
        );
}


/* ================= FINISH QUIZ ================= */

function finishQuiz() {

    quizModal.classList.add("hidden");

    const total =
        currentQuiz.length;

    const percentage =
        Math.round(
            (quizScore / total) * 100
        );

    const passed =
        percentage >= 80 &&
        quizHearts > 0;


    /*
       XP rewards
    */

    let earnedXP =
        quizScore * 4;

    if (passed) {

        earnedXP += 25;
    }

    currentUser.xp += earnedXP;

    currentUser.score += quizScore;


    /*
       Unlock next difficulty
    */

    if (
        passed &&
        selectedDifficulty === "easy" &&
        !currentUser.unlocked.includes("medium")
    ) {

        currentUser.unlocked.push(
            "medium"
        );
    }

    if (
        passed &&
        selectedDifficulty === "medium" &&
        !currentUser.unlocked.includes("hard")
    ) {

        currentUser.unlocked.push(
            "hard"
        );
    }


    /*
       Save history
    */

    currentUser.history.push({

        date: new Date().toLocaleString(),

        difficulty:
            selectedDifficulty,

        score:
            quizScore,

        total:
            total,

        percentage:
            percentage,

        passed:
            passed

    });


    checkAchievements(
        passed,
        percentage
    );

    saveCurrentUser();

    updateUserUI();

    showResult(
        passed,
        percentage,
        earnedXP
    );
}


/* ================= RESULT ================= */

function showResult(
    passed,
    percentage,
    earnedXP
) {

    const icon =
        passed ? "🏆" : "📚";

    const title =
        passed
            ? "Challenge Complete!"
            : "Keep Learning!";

    const message =
        passed
            ? "Great work! You passed this level and made progress in your HTML learning journey."
            : "Don't worry. Review the lessons and try the challenge again. Every attempt helps you improve.";

    pageContent.innerHTML = `

        <div class="result-card">

            <div class="result-icon">
                ${icon}
            </div>

            <h1>
                ${title}
            </h1>

            <p>
                ${message}
            </p>

            <div class="result-score">
                ${percentage}%
            </div>

            <p>
                Score:
                <strong>
                    ${quizScore}/${currentQuiz.length}
                </strong>
                <br>
                XP Earned:
                <strong>
                    +${earnedXP} XP
                </strong>
            </p>


            ${
                passed &&
                selectedDifficulty === "easy"
                    ? `
                        <p style="color:#22c55e">
                            🔓 Medium difficulty unlocked!
                        </p>
                      `
                    : ""
            }


            ${
                passed &&
                selectedDifficulty === "medium"
                    ? `
                        <p style="color:#22c55e">
                            🔓 Hard difficulty unlocked!
                        </p>
                      `
                    : ""
            }


            <div class="result-actions">

                <button
                    class="primary-btn"
                    onclick="showPage('dashboard')"
                >
                    🏠 Dashboard
                </button>

                <button
                    class="secondary-btn"
                    onclick="showPage('lessons')"
                >
                    📚 Review Lessons
                </button>

                <button
                    class="secondary-btn"
                    onclick="openQuiz('${selectedDifficulty}')"
                >
                    🔄 Try Again
                </button>

            </div>

        </div>

    `;
}


/* ================= ACHIEVEMENTS ================= */

function checkAchievements(
    passed,
    percentage
) {

    const achievements = {

        firstQuiz: {
            name: "First Challenge",
            icon: "🎯"
        },

        firstPass: {
            name: "HTML Beginner",
            icon: "🌱"
        },

        comboFive: {
            name: "Combo Master",
            icon: "🔥"
        },

        explorer: {
            name: "HTML Explorer",
            icon: "🧭"
        },

        master: {
            name: "HTML Master",
            icon: "👑"
        }

    };


    unlockAchievement(
        "firstQuiz",
        currentUser.history.length >= 1
    );

    unlockAchievement(
        "firstPass",
        passed
    );

    unlockAchievement(
        "comboFive",
        quizCombo >= 5
    );

    unlockAchievement(
        "explorer",
        currentUser.history.length >= 5
    );

    unlockAchievement(
        "master",
        percentage >= 90 &&
        selectedDifficulty === "hard"
    );
}


function unlockAchievement(
    key,
    condition
) {

    if (
        condition &&
        !currentUser.achievements.includes(key)
    ) {

        currentUser.achievements.push(
            key
        );

        const names = {

            firstQuiz: "🎯 First Challenge",

            firstPass: "🌱 HTML Beginner",

            comboFive: "🔥 Combo Master",

            explorer: "🧭 HTML Explorer",

            master: "👑 HTML Master"

        };

        showToast(
            "Achievement unlocked: " +
            names[key],
            "🏆"
        );
    }
}


/* ================= ACHIEVEMENTS PAGE ================= */

function renderAchievements() {

    const list = [

        {
            key: "firstQuiz",
            icon: "🎯",
            name: "First Challenge",
            description: "Complete your first quiz."
        },

        {
            key: "firstPass",
            icon: "🌱",
            name: "HTML Beginner",
            description: "Pass your first quiz."
        },

        {
            key: "comboFive",
            icon: "🔥",
            name: "Combo Master",
            description: "Get 5 correct answers in a row."
        },

        {
            key: "explorer",
            icon: "🧭",
            name: "HTML Explorer",
            description: "Complete 5 quizzes."
        },

        {
            key: "master",
            icon: "👑",
            name: "HTML Master",
            description: "Score at least 90% on Hard."
        }

    ];


    pageContent.innerHTML = `

        <div class="hero">

            <h1>
                Your <span>Achievements</span> 🏆
            </h1>

            <p>
                Keep learning and complete challenges
                to unlock achievements.
            </p>

        </div>


        <div class="achievement-grid">

            ${list.map(item => {

                const unlocked =
                    currentUser.achievements
                        .includes(item.key);

                return `

                    <div class="achievement
                        ${unlocked
                            ? "unlocked"
                            : "locked"}">

                        <div class="badge">
                            ${item.icon}
                        </div>

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ${item.description}
                        </p>

                        <p style="margin-top:10px">

                            ${
                                unlocked
                                    ? "✓ Unlocked"
                                    : "🔒 Locked"
                            }

                        </p>

                    </div>

                `;

            }).join("")}

        </div>

    `;
}


/* ================= HISTORY ================= */

function renderHistory() {

    const history =
        currentUser.history;

    if (!history.length) {

        pageContent.innerHTML = `

            <div class="result-card">

                <div class="result-icon">
                    📊
                </div>

                <h1>
                    No Quiz History Yet
                </h1>

                <p>
                    Take your first HTML challenge
                    and your results will appear here.
                </p>

                <button
                    class="primary-btn"
                    onclick="openQuiz('easy')"
                >
                    Start First Quiz →
                </button>

            </div>

        `;

        return;
    }


    pageContent.innerHTML = `

        <div class="section-title">

            <h2>Quiz History</h2>

            <span>
                ${history.length} attempts
            </span>

        </div>


        <div style="overflow-x:auto">

            <table class="history-table">

                <thead>

                    <tr>

                        <th>Date</th>

                        <th>Difficulty</th>

                        <th>Score</th>

                        <th>Percentage</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    ${history
                        .slice()
                        .reverse()
                        .map(item => `

                            <tr>

                                <td>
                                    ${item.date}
                                </td>

                                <td>
                                    ${capitalize(
                                        item.difficulty
                                    )}
                                </td>

                                <td>
                                    ${item.score}/${item.total}
                                </td>

                                <td>
                                    ${item.percentage}%
                                </td>

                                <td class="${
                                    item.passed
                                        ? "pass"
                                        : "fail"
                                }">

                                    ${
                                        item.passed
                                            ? "PASSED"
                                            : "REVIEW"
                                    }

                                </td>

                            </tr>

                        `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


/* ================= PROFILE ================= */

function renderProfile() {

    const total =
        currentUser.history.length;

    const passed =
        currentUser.history
            .filter(x => x.passed)
            .length;

    pageContent.innerHTML = `

        <div class="profile-card">

            <div class="profile-head">

                <div class="profile-avatar">
                    ${currentUser.username
                        .charAt(0)
                        .toUpperCase()}
                </div>

                <div class="profile-info">

                    <h2>
                        ${escapeHTML(
                            currentUser.fullName ||
                            currentUser.username
                        )}
                    </h2>

                    <p>
                        Level ${calculateLevel()}
                    </p>

                </div>

            </div>


            <!-- PERSONAL INFORMATION -->

            <div class="profile-row">

                <span>Full Name</span>

                <strong>
                    ${escapeHTML(
                        currentUser.fullName ||
                        "Not provided"
                    )}
                </strong>

            </div>


            <div class="profile-row">

                <span>Username</span>

                <strong>
                    ${escapeHTML(
                        currentUser.username
                    )}
                </strong>

            </div>


            <div class="profile-row">

                <span>Age</span>

                <strong>
                    ${escapeHTML(
                        String(
                            currentUser.age ||
                            "Not provided"
                        )
                    )}
                </strong>

            </div>


            <div class="profile-row">

                <span>Gender</span>

                <strong>
                    ${escapeHTML(
                        currentUser.gender ||
                        "Not provided"
                    )}
                </strong>

            </div>


            <div class="profile-row">

                <span>Strand</span>

                <strong>
                    ${escapeHTML(
                        currentUser.strand ||
                        "Not provided"
                    )}
                </strong>

            </div>


            <div class="profile-row">

                <span>Grade &amp; Section</span>

                <strong>
                    ${escapeHTML(
                        currentUser.gradeSection ||
                        "Not provided"
                    )}
                </strong>

            </div>


            <!-- LMS INFORMATION -->

            <div class="profile-row">

                <span>Level</span>

                <strong>
                    ${calculateLevel()}
                </strong>

            </div>


            <div class="profile-row">

                <span>Total XP</span>

                <strong>
                    ${currentUser.xp}
                </strong>

            </div>


            <div class="profile-row">

                <span>Quizzes Taken</span>

                <strong>
                    ${total}
                </strong>

            </div>


            <div class="profile-row">

                <span>Quizzes Passed</span>

                <strong>
                    ${passed}
                </strong>

            </div>


            <div class="profile-row">

                <span>Achievements</span>

                <strong>
                    ${currentUser.achievements.length}
                </strong>

            </div>

        </div>

    `;
}


/* ================= CLOSE QUIZ ================= */

document.getElementById("closeQuiz")
    .addEventListener(
        "click",
        () => {

            quizModal.classList.add("hidden");

        }
    );


/* ================= UTILITIES ================= */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];
    }

    return array;
}


function capitalize(text) {

    return text.charAt(0).toUpperCase()
        + text.slice(1);
}


function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ================= TOAST ================= */

let toastTimer;

function showToast(
    message,
    icon = "✓"
) {

    const toast =
        document.getElementById("toast");

    document.getElementById(
        "toastMessage"
    ).textContent = message;

    document.getElementById(
        "toastIcon"
    ).textContent = icon;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(
            () => {
                toast.classList.remove("show");
            },
            3000
        );
}