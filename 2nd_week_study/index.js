function changeToEnglish() {
    document.getElementById("loginbutton").innerHTML = "Sign In";
        document.getElementById("maincontainertext").innerHTML = "Unlimited movies, TV shows, and more.";
        document.getElementById("maincontainer").style.width = "900px";
        document.getElementById("maincontainer").style.left = "20%";
        document.getElementById("emailinput").placeholder = "Email address";
        document.getElementById("emailinput2").placeholder = "Email address";
        document.getElementById("starttext").innerHTML = "Get Started";
        document.getElementById("starttext2").innerHTML = "Get Started";
        document.getElementById("emailbutton").style.width = "202px";
        document.getElementById("emailbutton2").style.width = "202px";
        document.getElementById("maincontainersubtext").innerHTML = "Watch anywhere. Cancel anytime.";
        document.getElementById("maininnercontainertext").innerHTML = "Ready to watch? Enter your email to create or restart your membership.";
        document.getElementById("maininnercontainertext2").innerHTML = "Ready to watch? Enter your email to create or restart your membership.";
        document.getElementById("watchtvmaintext").innerHTML = "Enjoy on your TV.";
        document.getElementById("watchtvsubtext").innerHTML = "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.";
        document.getElementById("watchdevicemaintext").innerHTML = "Watch everywhere.";
        document.getElementById("watchdevicesubtext").innerHTML = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.";
        document.getElementById("kidsonlymaintext").innerHTML = "Create profiles for kids.";
        document.getElementById("kidsonlysubtext").innerHTML = "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.";
        document.getElementById("watchofflinemaintext").innerHTML = "Download your shows to watch offline.";
        document.getElementById("watchofflinesubtext").innerHTML = "Only available on ad-free plans.";
        document.getElementById("moviename").innerHTML = "Stranger Things";
        document.getElementById("saving").innerHTML = "Downloading...";
        document.getElementById("frequentlyaskedtext").innerHTML = "Frequently Asked Questions";
        document.getElementById("watchcontenttext").innerHTML = "What can I watch on Netflix?";
        document.getElementById("hiddenfirsttext").innerHTML = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
        document.getElementById("hiddenfirstanchor").innerHTML = "Check out some of our content.";
        document.getElementById("whattext").innerHTML = "What is Netflix?";
        document.getElementById("hiddensecondtext").innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.";
        document.getElementById("hiddensecondtext2").innerHTML = "You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!";
        document.getElementById("costtext").innerHTML = "How much does Netflix cost?";
        document.getElementById("hiddenthirdtext").innerHTML = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from KRW5,500 to KRW17,000 a month. No extra costs, no contracts.";
        document.getElementById("adstext").innerHTML = "What’s different on an ad-supported plan?";
        document.getElementById("hiddenfourthtext").innerHTML = "An ad-supported plan is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites with limited ad breaks. Downloads are not supported and a limited number of movies and TV shows are not available due to licensing restrictions.";
        document.getElementById("hiddenfourthanchor").innerHTML = "Learn more.";
        document.getElementById("wheretext").innerHTML = "Where can I watch?";
        document.getElementById("hiddenfifthtext").innerHTML = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.";
        document.getElementById("canceltext").innerHTML = "How do I cancel?";
        document.getElementById("hiddensixthtext").innerHTML = "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
        document.getElementById("kidstext").innerHTML = "Is Netflix good for kids?";
        document.getElementById("hiddenseventhtext").innerHTML = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.";
        document.getElementById("hiddenseventhtext2").innerHTML = "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";
        document.getElementById("questiontext").innerHTML = "Questions? Call ";
        document.getElementById("phonenum").innerHTML = "080-001-9588"
        document.getElementById("faq").innerHTML = "FAQ";
        document.getElementById("helpcenter").innerHTML = "Help Center";
        document.getElementById("account").innerHTML = "Account";
        document.getElementById("mediacenter").innerHTML = "Media Center";
        document.getElementById("ir").innerHTML = "Investor Relations";
        document.getElementById("jobs").innerHTML = "Jobs";
        document.getElementById("way").innerHTML = "Ways to Watch";
        document.getElementById("terms").innerHTML = "Terms of Use";
        document.getElementById("privacy").innerHTML = "Privacy Statement";
        document.getElementById("cookie").innerHTML = "Cookie Preferences";
        document.getElementById("corp").innerHTML = "Corporate Information";
        document.getElementById("contact").innerHTML = "Contact Us";
        document.getElementById("speed").innerHTML = "Speed Test";
        document.getElementById("legal").innerHTML = "Legal Notices";
        document.getElementById("only").innerHTML = "Only on Netflix";
        document.getElementById("footercontainer4").innerHTML = "Netflix South Korea";
        document.getElementById("textblock1").innerHTML = "Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588";
        document.getElementById("textblock2").innerHTML = "Representative: Reginald Shawn Thompson";
        document.getElementById("textblock3").innerHTML = "Email: korea@netflix.com";
        document.getElementById("textblock4").innerHTML = "Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea";
        document.getElementById("textblock5").innerHTML = "Business registration number: 165-87-00119";
        document.getElementById("textblock6").innerHTML = "Hosted by: Amazon Web Services Inc.";
        document.getElementById("kftc").innerHTML = "KFTC website";
}

function handleLanguageChange1() {
    var langSelect = document.getElementById("selectlanguage");

    var selectValue = langSelect.value;

    if (selectValue === "ENG") {
        document.getElementById("selectlanguage2").selectedIndex = 1;
        document.getElementById("back1").src = "https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/fcdbcd90-f133-4081-ac82-34918f18aabf/KR-en-20230327-popsignuptwoweeks-perspective_alpha_website_small.jpg";
        changeToEnglish();
    } else {
        location.reload();
    }
}

function handleLanguageChange2() {
    var langSelect2 = document.getElementById("selectlanguage2");

    var selectValue2 = langSelect2.value;

    if (selectValue2 === "ENG") {
        document.getElementById("selectlanguage").selectedIndex = 1;
        changeToEnglish();
    } else {
        location.reload();
    }
}

function increaseDivSize() {
    document.getElementById("listcontainer").style.height = "1027px";
    document.getElementById("listdiv").style.height = "830px";
}

function decreaseDivSize() {
    document.getElementById("listcontainer").style.height = "877px";
    document.getElementById("listdiv").style.height = "660px";
}

function hideDivisionAll() {
    var content1 = document.getElementById("hiddenlistcontent1");
    var content2 = document.getElementById("hiddenlistcontent2");
    var content3 = document.getElementById("hiddenlistcontent3");
    var content4 = document.getElementById("hiddenlistcontent4");
    var content5 = document.getElementById("hiddenlistcontent5");
    var content6 = document.getElementById("hiddenlistcontent6");
    var content7 = document.getElementById("hiddenlistcontent7");

    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    content6.style.display = "none";
    content7.style.display = "none";
}

function changesvgtox() {
}

function changesvgtoplus() {
    
}

function handleButton1Click() {
    var content1 = document.getElementById("hiddenlistcontent1");

    if (content1.style.display === "none") {
        hideDivisionAll();
        content1.style.display = "block";
        increaseDivSize();
    } else {
        content1.style.display = "none";
        decreaseDivSize();
    }
}

function handleButton2Click() {
    var content2 = document.getElementById("hiddenlistcontent2");
    var svgbox2 = document.getElementById("svgcontainer2");

    if (content2.style.display === "none") {
        hideDivisionAll();
        content2.style.display = "block";
        increaseDivSize();
    } else {
        content2.style.display = "none";
        decreaseDivSize();
    }
}

function handleButton3Click() {
    var content3 = document.getElementById("hiddenlistcontent3");

    if (content3.style.display === "none") {
        hideDivisionAll();
        content3.style.display = "block";
        increaseDivSize();
    } else {
        content3.style.display = "none";
        decreaseDivSize();
    }
}

function handleButton4Click() {
    var content4 = document.getElementById("hiddenlistcontent4");

    if (content4.style.display === "none") {
        hideDivisionAll();
        content4.style.display = "block";
        increaseDivSize();
    } else {
        content4.style.display = "none";
        decreaseDivSize();
    }
}

function handleButton5Click() {
    var content5 = document.getElementById("hiddenlistcontent5");

    if (content5.style.display === "none") {
        hideDivisionAll();
        content5.style.display = "block";
        increaseDivSize();
    } else {
        content5.style.display = "none";
        decreaseDivSize();
    }
}

function handleButton6Click() {
    var content6 = document.getElementById("hiddenlistcontent6");

    if (content6.style.display === "none") {
        hideDivisionAll();
        content6.style.display = "block";
        increaseDivSize();
    } else {
        content6.style.display = "none";
        decreaseDivSize();
    }
}

function handleButton7Click() {
    var content7 = document.getElementById("hiddenlistcontent7");

    if (content7.style.display === "none") {
        hideDivisionAll();
        content7.style.display = "block";
        increaseDivSize();
    } else {
        content7.style.display = "none";
        decreaseDivSize();
    }
}
