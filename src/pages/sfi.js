import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";

import "../styles/sfi.css";

import sfilogo from "../images/gecisfiLOGO.webp";


function Sfi() {
  // function change(id) {
  //   if (id == "historyButton") {
  //     addStuff("history");
  //     removeStuff("programs");
  //     removeStuff("unit");
  //   } else if (id == "programsButton") {
  //     addStuff("programs");
  //     removeStuff("history");
  //     removeStuff("unit");
  //   } else {
  //     addStuff("unit");
  //     removeStuff("history");
  //     removeStuff("programs");
  //   }
  // }
  // function addStuff(id) {
  //   document.getElementById(id+"Button").classList.add("active");
  //   document.getElementById(id + "Article").style.display = "block";
  // }
  // function removeStuff(id) {
  //   document.getElementById(id + "Button").classList.remove("active");
  //   document.getElementById(id + "Article").style.display = "none";
  // }
  
  return (
    <main>
      <Helmet>
        <title>Sfi Geci | Dvaya</title>
      </Helmet>
      <Navbar/>
      <div id="pageBg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="1440"
          height="560"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
        >
          <g mask='url("#SvgjsMask1000")' fill="none">
            <path
              id="firstWave"
              d="M -290.8324656920323,413 C -194.83,355.4 -2.83,141.6 189.1675343079677,125 C 381.17,108.4 477.17,319.2 669.1675343079677,330 C 861.17,340.8 957.17,155.8 1149.1675343079678,179 C 1341.17,202.2 1571,431.6 1629.1675343079678,446 C 1687.33,460.4 1477.83,290 1440,251"
              stroke-width="2"
            ></path>
            <path
              id="secondWave"
              d="M -754.852304407538,114 C -658.85,180.8 -466.85,418.2 -274.85230440753793,448 C -82.85,477.8 13.15,268.8 205.14769559246207,263 C 397.15,257.2 493.15,422 685.147695592462,419 C 877.15,416 1014.18,269.6 1165.147695592462,248 C 1316.12,226.4 1385.03,298.4 1440,311"
              stroke-width="2"
            ></path>
            <path
              id="thirdWave"
              d="M -376.3313029171089,243 C -280.33,271.8 -88.33,413.6 103.66869708289104,387 C 295.67,360.4 391.67,119.2 583.6686970828911,110 C 775.67,100.8 871.67,329.2 1063.668697082891,341 C 1255.67,352.8 1468.4,148.4 1543.668697082891,169 C 1618.93,189.6 1460.73,389 1440,444"
              stroke-width="2"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1000">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
      <div className="container">
        <div className="head-rectangle">
          <h1>SFI GECI</h1>
        </div>

        <div className="button-section">
          <button
            id="historyButton"
            className="active"
          >
            History
          </button>
          <button id="programsButton" >
            Active Programs
          </button>
          <button id="unitButton">
            2019-20 Unit
          </button>
        </div>
        <article id="historyArticle">
          <p>
            The Students’ Federation of India inherits with pride the
            anti-imperialist, patriotic, secular, democratic, and progressive
            legacy of the Indian people’s struggle for national liberation from
            the British colonial rule. It carries forward the heritage of the
            progressive student movement of our country, which has always
            considered itself an inseparable part of the broader struggle for
            social transformation. It is this legacy that the Students’
            Federation of India holds aloft in its slogan of “Independence,
            Democracy, and Socialism!”
          </p>
          <p>
            The Students’ Federation of India cannot be oblivious of the fact
            that our country had to suffer centuries of colonial slavery and
            ruthless exploitation of foreign imperialism and native feudalism.
            This led to mass-scale poverty, hunger, misery and aggravation of
            social evils for the vast majority of the people and forced them to
            lead a sub-human life. The growing consciousness against the social
            evils saw the birth of a social reform movement led by great
            rational thinkers. The people’s fight to put an end to the British
            colonial rule and feudalism gave birth to the historic national
            movement for independence, in which students played an active role.
          </p>
          <p>
            The formation of the All India Students’ Federation on 12th August
            1936 marked the consolidation of the progressive and radical trends
            within the Indian student community and the beginning of the
            organized student movement in India. The distinctive character of
            AISF was the manner in which it organized within its fold students
            irrespective of their political affiliation under the slogan of
            anti-imperialism. Also, on the world-scale, rapid advances were
            being made in the USSR vis-à-vis the deepening crisis in the
            industrially advanced capitalist countries, which attracted students
            to the Left ideology.
          </p>
          <p>
            The debates during the formative years of the AISF saw the
            crystallization of the two basic premises that have since guided the
            progressive student movement. The first is the right and the
            necessity of students to organize themselves in defense of their
            rights and to struggle for an education system that would meet the
            needs of the vast majority of our people. The second is the
            recognition that such a struggle can be successful only when
            combined with the broader struggles of other sections of the people.
          </p>
          <p>
            The post World War II years, which brought about the decisive defeat
            of fascism, also witnessed massive popular resistance worldwide
            against colonialism. During this period, the national liberation
            struggles in various countries gained momentum, and India was not an
            exception. The AISF stood in solidarity with the mass struggles, at
            times playing a significant role. As a culmination of these
            struggles, our country finally attained political independence.
            However, these were also the times when the communal divide aided by
            the British was deepening that finally led to the partition of the
            country.
          </p>
          <p>
            Independence in 1947 brought high hopes that the progressive and
            democratic ideals of the freedom struggle would be realized. In the
            initial decades, significant achievements were registered in
            building up a democratic polity and breaking the colonial stagnation
            of the economy. These, however, were halting and inadequate to meet
            the needs of our vast millions. This was because the process was
            fraught with contradictions — the central one being that the new
            regime adopted a capitalist path of development on the basis of a
            historic compromise with landlordism and imperialism. As­­­­ a
            result, the stranglehold of feudal and semi-feudal relations
            remained largely intact. Consequently, neither economic growth nor
            democracy could have a stable base. In the sphere of education too,
            while there was some progress in the post-independence period, it
            was in the main limited to a privileged few, and the Constitutional
            directive for universal and compulsory primary education remained
            largely unfulfilled.
          </p>
          <p>
            The different perspectives regarding the policies of the ruling
            className led to a serious rift in the student movement. A section
            of the leadership insisted on supporting the line of the then
            Congress government, thus making student movement tail the
            government’s policies. An opposing section stood for mobilizing the
            student community against the government policies. Due to the
            dominance of the former view, the AISF by the decade of sixties was
            robbed of the potential of struggling against the anti-student and
            anti-people policies of the then Congress government. This forced
            various state unit organizations to function independently. It
            became essential to build a new militant organization moored in the
            earlier fine tradition of the AISF, which led to the formation of
            the Students’ Federation of India [SFI] at an all India conference
            held from 27-30 December 1970 at Thiruvananthapuram.
          </p>
          <p>
            The Students’ Federation of India, since its inception, successfully
            championed the slogan of ‘Study & Struggle’ and effectively
            countered the disruptive theory of ‘Student Power’ that ascribed to
            the student community the leadership of social revolution. The
            Students’ Federation of India stood firmly against attacks on
            democratic rights and fought against the imposition of emergency.
            Its slogan of “Education for all, Jobs for all” found a strong
            appeal within the student masses of the country, rallying them to
            the fold of the movement and the organization. The Students’
            Federation of India consistently stood in solidarity with the
            anti-imperialist national liberation movements across the globe.
          </p>
          <p>
            The introduction of new education policy in 1986 saw a renewed
            attack on the public education system. Students’ Federation of India
            initiated a united struggle against these proposals intended to
            drastically curtail the scope of education in the government sector.
            SFI was able to withstand the anti-reservation stir against the
            Mandal Commission recommendations due to the principled position it
            had taken. It fought in defense of the unity and integrity of the
            country, for communal amity, social justice and made heroic
            sacrifices in these struggles.
          </p>
          <p>
            The Students’ Federation of India is fully aware of the fact that
            the imposition of the neo-liberal economic policies on our country
            is disastrous to the vast majority of the people, which deprives
            large sections of students from access to education and employment.
            On the other hand, the right wing communal forces systematically
            undermine even the modest democratic and secular content of our
            education system to propagate their politics of hate and religious
            frenzy in an attempt to draw a wedge between different communities.
            Students’ Federation of India has been at the forefront of struggles
            against this dual danger, in defense of students’ rights and for
            upholding the secular, democratic character and sovereignty of our
            Republic
          </p>
          <p>
            The earlier generations of the student community played their proud
            and glorious role in fighting for the achievement of political
            independence from the British. Following their example, it is the
            historic and patriotic duty of our generation of students to take an
            active interest in the struggle for elimination of the evil legacies
            of dependence, backwardness and poverty, and laying the foundation
            for a really free, prosperous, and progressive future for our
            people. The Students’ Federation of India presents before the
            student community a programme that guides them to achieve a
            democratic, scientific and progressive education system. It commits
            to carry forward the uncompromising struggle for the establishment
            of a socialist society, a social order free from all kinds of
            exploitation.
          </p>
        </article>
        <article id="programsArticle">
          <div className="programs">
            <h1>Some Of Our Active Programs</h1>
            <p>
              <i>ONE RUPEE REVOLUTION</i> <br />
              One rupee revolution was started with the goal of giving financial
              assistance to those who are suffering from diseases and other
              problems. On each Friday, a single rupee is collected from every
              student and it will be donated to the fund.
            </p>
            <p>
              <i>MASHITHANDU</i> <br />
              In regards with the beginning of the new acadamic year we had
              provided necessary study materials for the lower and upper primary
              students. Eventhough we think it's only a little ray of hope but
              for them it will a great relief and a source of encouragement.
            </p>
            <p>
              <i>OORINORUNU</i> <br />
              We always give first priority to the lower section of our society
              and we lend our love to them in the form of food . On 27th of
              every month we deliver food to people in Kallemada Kudi, a
              adhivasy colony, as a protest against the brutal murder of the
              young man named Madhu for stealing food.
            </p>
            <p>
              <i>KAITHAANGU</i> <br />
              One of the most revolutionary and popular Campaign taken by the
              SFI GECI that target to help the poor and needy.Under this
              campaign we provide a full course meal to the patients and
              bystanders at the Idukki Government Medical College
            </p>
          </div>
        </article>
        <article id="unitArticle">
          <div className="contents">
            <h1>SFI GECI UNIT 2019-2020</h1>
            <b>Secretary</b> <br />
            Avinash K C<br />
            S8 EEE
            <br />
            80897 46125
            <br />
            <br />
            <b>President</b> <br />
            Sachin Saburaj
            <br />
            S8 ME
            <br />
            94962 60961
            <br />
            <br />
            <b>Joint Secretary</b> <br />
            Abhijith T Sunil
            <br />
            S6 CSE
            <br />
            95629 33995
            <br />
            <br />
            <b>Joint Secretary</b> <br />
            AthulRaj K<br />
            S8 ME
            <br />
            90612 01456
            <br />
            <br />
            <b>Joint Secretary</b>
            <br />
            Amarnath P<br />
            S6 ME
            <br />
            81369 56586
            <br />
            <br />
            <b>Vice President</b>
            <br />
            Abhijith K<br />
            S8 CSE
            <br />
            95267 27913
            <br />
            <br />
            <b>Vice president</b>
            <br />
            Devika Sreekumar
            <br />
            S8 ECE
            <br />
            82816 59738
            <br />
            <br />
            <b>Vice president</b>
            <br />
            Aravind Babu P<br />
            S8 ME
            <br />
            85475 27914
            <br />
            <br />
            Adarsh Murali P <br />
            S8 CS
            <br />
            95673 71256
            <br />
            <br />
            Akhil C Das
            <br />
            S8 ME
            <br />
            8547527914
            <br />
            <br />
            Adithya B Anil
            <br />
            S8 IT
            <br />
            94469 09673
            <br />
            <br />
            Agrima P T<br />
            S6 CSE
            <br />
            97450 74043
            <br />
            <br />
            Sreerag V K<br />
            S6 ME
            <br />
            94964 54399
            <br />
            <br />
            Akshay V P<br />
            S8 CSE
            <br />
            97472 82024
            <br />
            <br />
            Anju A<br />
            S6 CSE
            <br />
            70256 08498
            <br />
            <br />
            Jinsha Backer
            <br />
            S8 IT
            <br />
            83049 09689
            <br />
            <br />
            Nihal S J<br />
            S4 ME
            <br />
            81380 94784
            <br />
            <br />
            Adithya Ramesan
            <br />
            S4 EEE
            <br />
            94975 25143
            <br />
            <br />
            Vaisakhan ML
            <br />
            S6 CSE <br />
            95675 68357
            <br />
            <br />
            Arun S R<br />
            S6 EC
            <br />
            92074 74490
            <br />
            <br />
            Faisal S <br />
            M4 EC
            <br />
            99474 33842
            <br />
            <br />
          </div>
        </article>
      </div>
      <hr />
      <footer>
        <img src={sfilogo} alt="sfigeci-Logo" />
        <div className="about">
          <p>Students Federation Of India</p>
          <p>Government Engineering College Idukki</p>
          <p>Copyright © 2020 Sfi Geci</p>
        </div>
      </footer>
    </main>
  );
}

export default Sfi;
