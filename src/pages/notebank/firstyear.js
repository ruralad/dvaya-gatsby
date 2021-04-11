import React from "react";
import { Helmet } from "react-helmet";

import style from "../../styles/studymaterials.module.css";

import Navbar from "../../components/navbar";

function Index() {
  return (
    <main>
      <Helmet>
        <title>First Year | Notebank | Dvaya</title>
      </Helmet>
      <Navbar />
      <div className={style.studyhero}>
        <h1 className={style.hh1}>First Year Study Materials</h1>
        <section className={style.studysection}>
          <div className={style.textbooks}>
            <h3 className={style.hh3}>Textbooks</h3>
            <ul className={style.ul}>
              <li className={style.liss}>
                Basics Of Electrical & Electronics Engineering EST130
                <span className={style.span}>
                  D C Kulshreshtha, “Basic Electrical Engineering” - 32MB
                </span>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/file/d/1s9VGUAABCBRaZDBoleOYMyO4NVhB8W5f/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                >
                  <div>Preview</div>
                </a>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/uc?export=download&id=1s9VGUAABCBRaZDBoleOYMyO4NVhB8W5f"
                  target="_blank" rel="noreferrer"
                >
                  <div>Download</div>
                </a>
              </li>
              <li className={style.liss}>
                Basics Of Civil & Mechanical Engineering EST120
                <span className={style.span}>
                  Civil Textbook - Basic Civil Engineering By Shibu Nilpat(KTU
                  2019 Syllabus) - 60MB
                </span>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/file/d/1i2NfS5JDux0xhvOwocJmCK8_YGBOSCxE/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                >
                  <div>Preview</div>
                </a>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/uc?export=download&id=1i2NfS5JDux0xhvOwocJmCK8_YGBOSCxE"
                  target="_blank" rel="noreferrer"
                >
                  <div>Download</div>
                </a>
              </li>
              <li className={style.liss}>
                Linear Algebra & Calculus MA101 <br />
                Vector Calculus, Differential Equations & Transforms MA102
                <span className={style.span}>
                  Both subjects share the same textbook <br />
                  H. Anton, I. Biven S.Davis, “Calculus”, Wiley, 10th edition -
                  24MB
                </span>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/file/d/1eoGfrAx9QtoAhPJTjlv_ippg59LOUmCP/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                >
                  <div>Preview</div>
                </a>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/uc?export=download&id=1eoGfrAx9QtoAhPJTjlv_ippg59LOUmCP"
                  target="_blank" rel="noreferrer"
                >
                  <div>Download</div>
                </a>
              </li>

              <li className={style.liss}>
                Engineering Mechanics EST100
                <span className={style.span}>
                  Timoshenko and Young, Engineering Mechanics, McGraw Hill
                  Publishers - 19MB
                </span>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/file/d/1cwIPaDpKj-7XDkPgUXBCAM9geKvl8UZl/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                >
                  <div>Preview</div>
                </a>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/uc?export=download&id=1cwIPaDpKj-7XDkPgUXBCAM9geKvl8UZl"
                  target="_blank" rel="noreferrer"
                >
                  <div>Download</div>
                </a>
              </li>

              <li className={style.liss}>
                Engineering Chemistry CYT100
                <span className={style.span}>
                  P. W. Atkins, “Physical Chemistry”, Oxford University Press -
                  17MB
                </span>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/file/d/1_Zr8YJkUyCwxeGUy-s4T6Wgg4t5intj9/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                >
                  <div>Preview</div>
                </a>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/uc?export=download&id=1_Zr8YJkUyCwxeGUy-s4T6Wgg4t5intj9"
                  target="_blank" rel="noreferrer"
                >
                  <div>Download</div>
                </a>
              </li>

              <li className={style.liss}>
                Engineering Physics A PHT100 <br />
                Engineering Physics B PHT110
                <span className={style.span}>
                  Both subjects share the same textbook <br />
                  H.K.Malik , A.K. Singh, “Engineering Physics” McGraw Hill
                  Education - 3MB
                </span>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/file/d/1tO4lpSTnHjBbpebjvARV9rGzYxe-WdL-/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                >
                  <div>Preview</div>
                </a>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/uc?export=download&id=1tO4lpSTnHjBbpebjvARV9rGzYxe-WdL-"
                  target="_blank" rel="noreferrer"
                >
                  <div>Download</div>
                </a>
              </li>
            </ul>
          </div>
          <div className={style.syllandlinks}>
            <div className={style.syllabus}>
              <h3 className={style.extrap}>Syllabus</h3>
              <p className={[style.spp, style.extrap].join(" ")}>
                S1 S2 Complete Syllabus with
                <br />
                Important topics and Model Question Papers
              </p>
              <div className={style.extrap}>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/file/d/1_9VWC91xen6Q2PeQNLLL3KoQZAXtqUqJ/view?usp=sharing"
                  target="_blank" rel="noreferrer"
                >
                  <div>Preview</div>
                </a>
                <a
                  className={style.tolink}
                  href="https://drive.google.com/uc?export=download&id=1_9VWC91xen6Q2PeQNLLL3KoQZAXtqUqJ"
                  target="_blank" rel="noreferrer"
                >
                  <div>Download</div>
                </a>
              </div>
            </div>
            <div className={style.links}>
              <h3>Important Links</h3>
              <p className={style.linkp}>
                Links to sites with more KTU study materials
              </p>
              <ul className={style.ull}>
                <li className={style.lists}>
                  <a
                    className={style.tolinklist}
                    href="https://www.ktuassist.in/"
                    target="_blank" rel="noreferrer"
                  >
                    Ktu Assist
                  </a>
                </li>
                <li className={style.lists}>
                  <a
                    className={style.tolinklist}
                    href="https://www.ktustudents.in/"
                    target="_blank" rel="noreferrer"
                  >
                    Ktu Students
                  </a>
                </li>
                <li className={style.lists}>
                  <a
                    className={style.tolinklist}
                    href="https://www.ktuqbank.com/"
                    target="_blank" rel="noreferrer"
                  >
                    Ktu Qbank
                  </a>
                </li>
                <li className={style.lists}>
                  <a
                    className={style.tolinklist}
                    href="https://www.ktuweb.com/"
                    target="_blank" rel="noreferrer"
                  >
                    Ktu Web
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Index;
