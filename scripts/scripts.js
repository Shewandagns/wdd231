// Courses array (from your input)
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to display only course titles and calculate total credits
function displayCourseTitles(filteredCourses) {
    const coursesContainer = document.querySelector('.courses');
    const totalCreditsElement = document.querySelector('.total-credits');
    coursesContainer.innerHTML = ''; // Clear any previous content
    
    let totalCredits = 0;
    
    filteredCourses.forEach(course => {
        // Update the total credits
        totalCredits += course.credits;

        // Create a div for each course title
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course-title');
        courseDiv.textContent = `${course.subject} ${course.number}`;

        // Append the course title div to the container
        coursesContainer.appendChild(courseDiv);
    });

    // Display the total credits
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Filter courses by subject
function filterCourses(type) {
    if (type === 'all') {
        displayCourseTitles(courses);
    } else {
        const filtered = courses.filter(course => course.subject === type);
        displayCourseTitles(filtered);
    }
}

// Initial display of all courses
filterCourses('all');