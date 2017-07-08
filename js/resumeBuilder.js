var bio = {
  "name": "Deepanshu Sinha",
  "role": "Android Developer",
  "contacts": {
    "mobile": "+918892275587",
    "email": "107sinha@gmail.com",
    "github": "sinhaDroid",
    "location": "Bengaluru, India"
  },
  "welcomeMessage": "Specializing in developing Android apps, but curious about everything.",
  "skills": ['Software Engineering', 'Web Development', 'Android Development', 'HTML5/CSS3',
            'Python', 'Django', 'JavaScript', 'Java', 'Linux', 'NodeJs', 'ReactJs'],
  "biopic": "./images/deepanshu.png",
  display: function () {
    // body...
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    formattedContactInfo.forEach(function (formattedContact) {
    // body...
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
    });

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      bio.skills.forEach(function (skill) {
        // body...
        $("#skills").append(HTMLskills.replace("%data%", skill));
      });
    }
  }
};

var work = {
  "jobs": [
    {
      "employer": "Newsway",
      "title": "Android Developer",
      "location": "Bengaluru, India",
      "dates": "2016-Progress",
      "description": "Building a product from scratch"
    },
    {
      "employer": "SportsCafe",
      "title": "Android Developer",
      "location": "Bengaluru, India",
      "dates": "2016-2016",
      "description": "To provide real-time, engaging and interactive application to build the most preferred online sports portal for the Indian Sports Fan, and through it help develop India\'s Sports Culture. Creating the architecture for development and Validating the UI design which is given by designer. Developing the UI and implementing the functionalities with end to end testing. Handling release management and Focusing on further improvement of the product with the feedback\'s from the users."
    },
    {
      "employer": "Peersome",
      "title": "Android Developer Intern",
      "location": "Bengaluru, India",
      "dates": "2015-2016",
      "description": "To Provide Scale and interactive application for Peersome, A self drive car rental service provider. Developing Complete Android Application for Customer as well as Vendors from Scratch."
    },
    {
      "employer": "Cheerz Labs!",
      "title": "Software Developer Intern",
      "location": "Bengaluru, India",
      "dates": "2015-2015",
      "description": "A Service Based Company which deals with the technical projects. Build a Responsive and Interactive Website for Clients."
    }
  ],
  display: function () {
    // body...
    if(work.jobs.length > 0) {
    
      $("#workExperience").append(HTMLworkStart);

      work.jobs.forEach(function (job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

        var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

        $(".work-entry:last").append(formattedEmployerWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDatesWorked);
        $(".work-entry:last").append(formattedWorkDescription);
      });
    }
  }
};

projects = {
  'projects': [
    {
      'title': 'Interactive Resume',
      'dates': '2017',
      'description': 'Nothing here... except for some kittens from placekitten.com',
      'images': [
        'http://placekitten.com/g/300/300',
        'http://placekitten.com/g/250/300',
        'http://placekitten.com/g/350/300'
      ]
    },
    {
      'title': 'Interactive Resume',
      'dates': '2017',
      'description': 'Combination of python, html/css and js projects',
      'images': [
        './images/image1.png',
        './images/image2.png',
        './images/image3.png'
      ]
    }
  ],
  display: function () {
    if(projects.projects.length > 0) {
      projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        project.images.forEach(function (image) {
          var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
          $(".project-entry:last").append(formattedProjectImage);
        });
      });
    }
  }
};

var education = {
  "schools": [
    {
      "name": "RR Institute of Technology",
      "location": "Bengaluru, India",
      "degree": "Bachelor of Engineering",
      "majors": ['Computer Science'],
      "dates": "June 2012 - July 2016",
      "url": "http://deepanshusinha.me/"
    },
    {
      "name": "Dehradun Public School",
      "location": "Ghaziabad, India",
      "degree": "Inter School/SSLC",
      "majors": ['Science(PCM)'],
      "dates": "June 2010 - April 2012",
      "url": "http://deepanshusinha.me/"
    },
    {
      'name': 'Ingraham Institute English School',
      'location': 'Ghaziabad, India',
      'degree': 'High School',
      'majors': ['Science(CS)'],
      'dates': 'April 2006 - March 2010',
      'url': 'http://deepanshusinha.me/'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Front-End Nanodegree',
      'school': 'Udacity',
      'dates': '2017',
      'url': 'http://www.udacity.com'
    },
    {
      'title': 'Android Developer Nanodegree',
      'school': 'Udacity',
      'dates': '2017',
      'url': 'http://www.udacity.com'
    },
    {
      'title': 'Intro To Programming',
      'school': 'Udacity',
      'dates': '2017',
      'url': 'http://www.udacity.com'
    }
  ],
  display: function () {
    // body...
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
      education.schools.forEach(function (school) {
        // body...
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);      
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[0]); 
        var formattedSchoolUrl = HTMLschoolURL.replace("%data%", school.url);      

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
        $(".education-entry:last").append(formattedSchoolUrl);
      });

      if(education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {       
          $("#education").append(HTMLschoolStart);
          var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
          var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
          var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
          var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);

          $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
          $(".education-entry:last").append(formattedOnlineDates);
          $(".education-entry:last").append(formattedOnlineURL);
        });
      }  
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);