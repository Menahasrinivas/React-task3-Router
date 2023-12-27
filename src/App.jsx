import React from "react";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

import Nav from "./components/Nav";
import Data from "./components/Data";
import Full from "./components/Full";
import Carrier from "./components/Carrier";
import Cyber from "./components/Cyber";
import All from "./components/All";

function App() {
  const fullStackContent = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_640.png",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
    },
    {
      image:
        "https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba.jpg",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "The Frontend Syllabus starts with programming basics, transitions to Java, covers data structures, and then delves into HTML, CSS, CSS frameworks, animations, Figma, and JavaScript. Learners also explore DOM manipulation, asynchronous JavaScript, and frontend frameworks like React.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kqDyIihr6E0pSYjka1mZjgE15zU8nOToFg&usqp=CAU",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "Full stack developers rate their happiness above average. At CareerExplorer, we conduct an ongoing survey with millions of people and ask them how satisfied they are with their careers. As it turns out, full stack developers rate their career happiness 3.4 out of 5 stars which puts them in the top 37% of careers.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZg2BO6WC4qOkWC2LP8LyXvD-NyPrTV3pog&usqp=CAU",
      alt: "full-stack",
      title: "Full Stack Development",
      description:
        "The most popular full stack frameworks include Laravel, Ruby on Rails, and Express. js. If you're just starting, you might want to choose a framework that is relatively easy to learn, such as Laravel or Ruby on Rails. Alternatively, if you're looking for something more versatile or powerful, you might consider Express.",
    },
  ];
  const CarrierDev = [
    {
      image: "https://img.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg?size=626&ext=jpg&ga=GA1.1.1882539342.1699247927&semt=ais",
      alt: "full-stack",
      title: "Career Development",
      description:
        "The four stages consist of establishment, advancement, maintenance and withdrawal. Each of the stages represents the age of a worker and the responsibilities and challenges that need to be addressed. Some workers repeat this model if they have a second career or midlife career change",
    },
    {
      image:
        "https://img.freepik.com/free-vector/stages-business-development-growth_3446-686.jpg?size=626&ext=jpg&ga=GA1.1.1882539342.1699247927&semt=ais",
      alt: "full-stack",
      title: "Career Development",
      description:
        "These are: (1) theory of work-adjustment; (2) Holland's theory of vocational personalities in work environment; (3) the self-concept theory of career development formulated by Super and more recently by Savickas; (4) Gottfredson's theory of circumscription and compromise; and (5) social cognitive career theory.",
    },
    {
      image:
        "https://img.freepik.com/free-vector/smart-system-businessman-strategy-illustration-concept_1344-193.jpg?size=626&ext=jpg&ga=GA1.1.1882539342.1699247927&semt=ais",
      alt: "full-stack",
      title: "Career Development",
      description:
        "This being true, career management is an important life skill to develop and cultivate. According to Get Smart! About Modern Career Development, there are six stages of modern career development: Assessment, Investigation, Preparation, Commitment, Retention, and Transition.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?size=626&ext=jpg&ga=GA1.1.1882539342.1699247927&semt=ais",
      alt: "full-stack",
      title: "Career Development",
      description:
        "The Big Five Model, also referred to as the Five-Factor Model, is a famous personality theory that describes personality as the play between five personality traits or factors. These factors or characteristics include openness to experience, conscientiousness, agreeableness, extraversion and neuroticism.",
    },
  ];
  const Cybersec = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YG7Zuzw4snvYPdDTAjZbw3V0v1SH2w1ZkTCUk2MVvA&s",
      alt: "full-stack",
      title: "Cyber Security",
      description:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/technology-security-concept-safety-digital-protection-system_142243-71.jpg?size=626&ext=jpg&ga=GA1.1.1882539342.1699247927&semt=ais",
      alt: "full-stack",
      title: "Cyber Security",
      description:
        "TLet's delve into the salary ranges for cyber security professionals in Nigeria. According to PayScale, the average annual salary for a Cyber Security Analyst in Nigeria ranges from ₦2,400,000 to ₦6,500,000. Glassdoor reports a similar range, with an average of ₦4,000,000 per year.",
    },
    {
      image:
      "https://cdn.pixabay.com/photo/2016/10/31/06/12/cyber-security-1784985_640.png",
        
      alt: "full-stack",
      title: "Cyber Security",
      description:
        "Cybersecurity professionals are responsible for protecting their company's information and data from attacks by hackers, viruses, or other cyber threats. These professionals typically work in teams with other IT specialists, such as software developers or programmers.",
    },
    {
      image:
      "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=2048x2048&w=is&k=20&c=c05-v-V0DiMu7X4ldqZ19GBi7cTrO7TelJKNR-59uAs=",
      alt: "full-stack",
      title: "Cyber Security",
      description:
        "The 3 major types of cyber security are network security, cloud security, and physical security. Your operating systems and network architecture make up your network security. It can include network protocols, firewalls, wireless access points, hosts, and servers.",
    },
  ];
  const DataScience = [
    {
      image:
        "https://cdn.pixabay.com/photo/2018/05/11/09/02/technology-3389904_640.jpg",
      alt: "full-stack",
      title: "Data Science",
      description:
        "Data Science is more valuable than computer science. A Computer Scientist earns an annual salary of USD 100000 on average. A data scientist, on the other hand, earns more than USD 140000 per year. If you are a software developer or an experienced systems engineer, owning skillsets can instantly boost your salary.",
    },
    {
      image:
        "https://www.datapro.in/uploads/2d1ba0d260c4fc8de8917729d00cc574.jpeg",
      alt: "full-stack",
      title: "Data Science",
      description:
        "The highest salary of data scientists can go beyond USD 200,000 if you have the required skills. On average, a data scientist can make $126,694 per year. Generally, the range is $99,000 to $164,000.",
    },
    {
      image:
      "https://cdn.pixabay.com/photo/2018/05/15/07/44/technology-3402365_640.jpg",
      alt: "full-stack",
      title: "Data Science",
      description:
        "Data science is a broad career path that is undergoing developments and thus promises abundant opportunities in the future. Data science job roles are likely to get more specific, which in turn will lead to specializations in the field.",
    },
    {
      image:
      "https://cdn.pixabay.com/photo/2021/11/04/06/27/artificial-intelligence-6767502_640.jpg",
       alt: "full-stack",
      title: "Data Science",
      description:
        "Data Sciences uses AI (and its Machine Learning subset) to interpret historical data, recognize patterns, and make predictions. In this case, AI and Machine Learning help data scientists to gather data in the form of insights.",
    },
  ];
  const allCards = [
    ...fullStackContent,
    ...CarrierDev,
    ...Cybersec,
    ...DataScience,
  ];

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/all" element={<All allcard={allCards}/>} />
        <Route
          path="/full-stack"
          element={<Full content={fullStackContent} />}
        />
        <Route path="/data-science" element={<Data datas={DataScience} />} />
        <Route path="/cyber-security" element={<Cyber contents={Cybersec} />} />
        <Route
          path="/carrier-development"
          element={<Carrier data={CarrierDev} />}
        />
        <Route
          path="*"
          element={<Navigate to="/all"/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;