function handleLanguageChange1() {
    var langSelect = document.getElementById("selectlanguage");

    var selectValue = langSelect.value;
    console.log(selectValue);

    if (selectValue === "ENG") {
        console.log("영어입니다.");
        document.getElementById("selectlanguage2").selectedIndex = 1;
        document.getElementById("loginbutton").innerHTML = "Sign In";
        document.getElementById("maincontainertext").innerHTML = "Unlimited movies, TV shows, and more.";
        document.getElementById("maincontainer").style.width = "900px";
        document.getElementById("maincontainer").style.left = "20%";
        document.getElementById("emailinput").placeholder = "Email address"
        document.getElementById("emailinput2").placeholder = "Email address"
        document.getElementById("starttext").innerHTML = "Get Started"
        document.getElementById("starttext2").innerHTML = "Get Started"
        document.getElementById("emailbutton").style.width = "202px"
        document.getElementById("emailbutton2").style.width = "202px"
        document.getElementById("maincontainersubtext").innerHTML = "Watch anywhere. Cancel anytime."
        document.getElementById("maininnercontainertext").innerHTML = "Ready to watch? Enter your email to create or restart your membership."
        document.getElementById("maininnercontainertext2").innerHTML = "Ready to watch? Enter your email to create or restart your membership."
        document.getElementById("watchtvmaintext").innerHTML = "Enjoy on your TV."
        document.getElementById("watchtvsubtext").innerHTML = "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        document.getElementById("watchdevicemaintext").innerHTML = "Watch everywhere."
        document.getElementById("watchdevicesubtext").innerHTML = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        document.getElementById("kidsonlymaintext").innerHTML = "Create profiles for kids."
        document.getElementById("kidsonlysubtext").innerHTML = "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        document.getElementById("watchofflinemaintext").innerHTML = "Download your shows to watch offline."
        document.getElementById("watchofflinesubtext").innerHTML = "Only available on ad-free plans."
        document.getElementById("moviename").innerHTML = "Stranger Things"
        document.getElementById("saving").innerHTML = "Downloading..."
        document.getElementById("frequentlyaskedtext").innerHTML = "Frequently Asked Questions"
        document.getElementById("watchcontenttext").innerHTML = "What can I watch on Netflix?"
        document.getElementById("whattext").innerHTML = "What is Netflix?"
        document.getElementById("costtext").innerHTML = "How much does Netflix cost?"
        document.getElementById("adstext").innerHTML = "What’s different on an ad-supported plan?"
        document.getElementById("wheretext").innerHTML = "Where can I watch?"
        document.getElementById("canceltext").innerHTML = "How do I cancel?"
        document.getElementById("kidstext").innerHTML = "Is Netflix good for kids?"
        document.getElementById("footercontainer1").innerHTML = "Questions? Call 080-001-9588"
        document.getElementById("faq").innerHTML = "FAQ"
        document.getElementById("helpcenter").innerHTML = "Help Center"
        document.getElementById("account").innerHTML = "Account"
        document.getElementById("mediacenter").innerHTML = "Media Center"
        document.getElementById("ir").innerHTML = "Investor Relations"
        document.getElementById("jobs").innerHTML = "Jobs"
        document.getElementById("way").innerHTML = "Ways to Watch"
        document.getElementById("terms").innerHTML = "Terms of Use"
        document.getElementById("privacy").innerHTML = "Privacy Statement"
        document.getElementById("cookie").innerHTML = "Cookie Preferences"
        document.getElementById("corp").innerHTML = "Corporate Information"
        document.getElementById("contact").innerHTML = "Contact Us"
        document.getElementById("speed").innerHTML = "Speed Test"
        document.getElementById("legal").innerHTML = "Legal Notices"
        document.getElementById("only").innerHTML = "Only on Netflix"
        document.getElementById("footercontainer4").innerHTML = "Netflix South Korea"
        document.getElementById("textblock1").innerHTML = "Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588"
        document.getElementById("textblock2").innerHTML = "Representative: Reginald Shawn Thompson"
        document.getElementById("textblock3").innerHTML = "Email: korea@netflix.com"
        document.getElementById("textblock4").innerHTML = "Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea"
        document.getElementById("textblock5").innerHTML = "Business registration number: 165-87-00119"
        document.getElementById("textblock6").innerHTML = "Hosted by: Amazon Web Services Inc."
        document.getElementById("kftc").innerHTML = "KFTC website"
    } else {
        console.log("한국어입니다.");
        location.reload();
    }
}

function handleLanguageChange2() {
    var langSelect2 = document.getElementById("selectlanguage2");

    var selectValue2 = langSelect2.value;
    console.log(selectValue2);

    if (selectValue2 === "ENG") {
        console.log("영어입니다.");
        document.getElementById("selectlanguage").selectedIndex = 1;
        document.getElementById("loginbutton").innerHTML = "Sign In";
        document.getElementById("maincontainertext").innerHTML = "Unlimited movies, TV shows, and more.";
        document.getElementById("maincontainer").style.width = "900px";
        document.getElementById("maincontainer").style.left = "20%";
        document.getElementById("emailinput").placeholder = "Email address"
        document.getElementById("emailinput2").placeholder = "Email address"
        document.getElementById("starttext").innerHTML = "Get Started"
        document.getElementById("starttext2").innerHTML = "Get Started"
        document.getElementById("emailbutton").style.width = "202px"
        document.getElementById("emailbutton2").style.width = "202px"
        document.getElementById("maincontainersubtext").innerHTML = "Watch anywhere. Cancel anytime."
        document.getElementById("maininnercontainertext").innerHTML = "Ready to watch? Enter your email to create or restart your membership."
        document.getElementById("maininnercontainertext2").innerHTML = "Ready to watch? Enter your email to create or restart your membership."
        document.getElementById("watchtvmaintext").innerHTML = "Enjoy on your TV."
        document.getElementById("watchtvsubtext").innerHTML = "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        document.getElementById("watchdevicemaintext").innerHTML = "Watch everywhere."
        document.getElementById("watchdevicesubtext").innerHTML = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        document.getElementById("kidsonlymaintext").innerHTML = "Create profiles for kids."
        document.getElementById("kidsonlysubtext").innerHTML = "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        document.getElementById("watchofflinemaintext").innerHTML = "Download your shows to watch offline."
        document.getElementById("watchofflinesubtext").innerHTML = "Only available on ad-free plans."
        document.getElementById("moviename").innerHTML = "Stranger Things"
        document.getElementById("saving").innerHTML = "Downloading..."
        document.getElementById("frequentlyaskedtext").innerHTML = "Frequently Asked Questions"
        document.getElementById("watchcontenttext").innerHTML = "What can I watch on Netflix?"
        document.getElementById("whattext").innerHTML = "What is Netflix?"
        document.getElementById("costtext").innerHTML = "How much does Netflix cost?"
        document.getElementById("adstext").innerHTML = "What’s different on an ad-supported plan?"
        document.getElementById("wheretext").innerHTML = "Where can I watch?"
        document.getElementById("canceltext").innerHTML = "How do I cancel?"
        document.getElementById("kidstext").innerHTML = "Is Netflix good for kids?"
        document.getElementById("footercontainer1").innerHTML = "Questions? Call 080-001-9588"
        document.getElementById("faq").innerHTML = "FAQ"
        document.getElementById("helpcenter").innerHTML = "Help Center"
        document.getElementById("account").innerHTML = "Account"
        document.getElementById("mediacenter").innerHTML = "Media Center"
        document.getElementById("ir").innerHTML = "Investor Relations"
        document.getElementById("jobs").innerHTML = "Jobs"
        document.getElementById("way").innerHTML = "Ways to Watch"
        document.getElementById("terms").innerHTML = "Terms of Use"
        document.getElementById("privacy").innerHTML = "Privacy Statement"
        document.getElementById("cookie").innerHTML = "Cookie Preferences"
        document.getElementById("corp").innerHTML = "Corporate Information"
        document.getElementById("contact").innerHTML = "Contact Us"
        document.getElementById("speed").innerHTML = "Speed Test"
        document.getElementById("legal").innerHTML = "Legal Notices"
        document.getElementById("only").innerHTML = "Only on Netflix"
        document.getElementById("footercontainer4").innerHTML = "Netflix South Korea"
        document.getElementById("textblock1").innerHTML = "Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588"
        document.getElementById("textblock2").innerHTML = "Representative: Reginald Shawn Thompson"
        document.getElementById("textblock3").innerHTML = "Email: korea@netflix.com"
        document.getElementById("textblock4").innerHTML = "Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea"
        document.getElementById("textblock5").innerHTML = "Business registration number: 165-87-00119"
        document.getElementById("textblock6").innerHTML = "Hosted by: Amazon Web Services Inc."
        document.getElementById("kftc").innerHTML = "KFTC website"
    } else {
        console.log("한국어입니다.");
        location.reload();
    }
}


