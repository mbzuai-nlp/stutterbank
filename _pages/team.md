---
# title: "Research Team"
permalink: /team/
layout: single
author_profile: false

institutions:
  - url: https://mbzuai.ac.ae/
    image_path: /assets/images/logo/MBZUAI.jpg
    alt: MBZUAI
    title: MBZUAI
  - url: https://speechcare.center/
    image_path: /assets/images/logo/speechcare.jpg
    alt: SpeechCare
    title: SpeechCare
---

<style>
.sponsors-list { justify-content: flex-start; }
.sponsors-list > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  align-items: center;
  margin: 0.2em;
  padding: 0.5em;
  text-align: center;
}
.sponsors-list a { text-decoration: none; }
.sponsors-list > a > .dummy-padding { margin-top: 100%; }
.sponsors-list > a > img { margin: 0; }
.sponsors-list > a:hover { box-shadow: 0 0 10px #00000044; }
.sponsors-list > a:hover > img { box-shadow: none !important; }
</style>

<h2>MBZUAI Research Team</h2>

{% include bio-box
   name="Hanan Aldarmaki"
   picture="/assets/images/Hanan-photo.jpg"
   site=""
   institution="Mohamed Bin Zayed University of Artificial Intelligence, UAE"
   email = "hanan.aldarmaki@mbzuai.ac.ae"
%}

{% include bio-box
   name="Hawau Olamide Toyin"
   picture="/assets/images/hawau-Photo.jpg"
   site=""
   institution="Mohamed Bin Zayed University of Artificial Intelligence, UAE"
   email = "hawau.toyin@mbzuai.ac.ae"
%}


<h2>Speech-Language Pathologists</h2>

Behind every voice sample in the StutterBank lies the careful work of dedicated speech-language pathologists.
These professionals are essential in ensuring the quality and reliability of the data we collect — from guiding participants through the process, to annotating and validating each sample with clinical precision.
We are deeply grateful to every therapist who is helping us build a better future for stuttering assessment through science and collaboration.

<h4>Meet the Clinicians:</h4>


{% include bio-box
   name="Gonçalo Leal"
   picture="/assets/images/goncalo-photo.jpg"
   site=""
   institution="Speech Care, UAE"
   email = ""
%}

{% include bio-box
   name="Ana Rita Valente"
   picture="/assets/images/rita-photo.jpg"
   site=""
   institution="Speech Care, UAE"
   email = ""
%}


<h2>🤝 Our Community Champions</h2>
The reach of the StutterBank would not be possible without the generous support of partner organizations and community groups that help spread the word.
By encouraging participation and raising awareness, these champions are helping us build an inclusive and impactful dataset on stuttering.
Whether you're a foundation, a clinic, a university group or an advocacy network — thank you for making voices count.


{% include sponsors-list id="institutions" layout="third" %}

