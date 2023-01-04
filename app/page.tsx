"use client";

import Content from "$components/Content";
import Header from "$components/Header";
import ImageTextArea from "$components/ImageTextArea";
import {
  VerticalColumn,
  VerticalColumnContainer,
} from "$components/VerticalColumns";
import Link from "next/link";
import styles from "./page.module.scss";

import Button from "$components/Button";
import Popup from "$components/Popup";
import refugees1 from "$public/images/refugees_1.webp";
import refugeesWelcome from "$public/images/refugees_welcome.jpg";
import { useState } from "react";

export default function Home() {
  let [charitiesPopup, setCharitiesPopup] = useState(false);

  const toggleCharities = () => setCharitiesPopup((c) => !c);

  const popup = (
    <Popup>
      <div
        style={{
          // width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Charities</h1>
        <a
          onClick={toggleCharities}
          style={{
            fontWeight: 700,
            opacity: 0.5,
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
          className={styles.close}
        >
          CLOSE
        </a>
      </div>
      <p>
        Below is a list of charities designed to help support refugees, asylum
        seekers and those currently living in war-torn countries.
      </p>
      <ul>
        <li>
          <Link href="https://www.unhcr.org/">
            The United Nations High Commissioner for Refugees (UNHCR)
          </Link>
        </li>
        <li>
          <Link href="https://www.rescue.org/">
            The International Rescue Committee (IRC)
          </Link>
        </li>
        <li>
          <Link href="https://www.savethechildren.org/">Save the Children</Link>
        </li>
        <li>
          <Link href="https://refugeerights.org/">
            International Refugee Assistance Project (IRAP)
          </Link>
        </li>
      </ul>
    </Popup>
  );

  return (
    <>
      {charitiesPopup && popup}
      <Header id="hero" hero>
        <div className={styles.suptitle}>Lets talk about</div>
        <h1 className="withSuptitle">Europe&apos;s Refugee Crisis.</h1>
        <p>
          Created by Morgan Jones as a part of the Skills Challenge GCSE.{" "}
          <a href="https://sweetuk.net/s/github?repo=Global-Citizenship">
            Source code
          </a>
          .
        </p>
      </Header>
      <Content>
        <h1 id="what-is-a-refugee">Firstly, what is a refugee?</h1>
        <p>
          The terms &quot;refuge&quot; and &quot;asylum seeker&quot; tend to get
          mixed up a lot. If you&apos;re unaware of the difference, you can read
          the definitions of these words below.
        </p>
      </Content>

      <VerticalColumnContainer>
        <VerticalColumn>
          <h2>Refugees</h2>
          <p>
            A refugee is a person who has fled their country due to a serious
            risk of human rights violations or persecution. The risks of these
            people staying in their home country are so high that they felt the
            need to leave to seek safety because their government cannot or will
            not protect them from these dangers.
          </p>
        </VerticalColumn>
        <VerticalColumn>
          <h2>Asylum Seekers</h2>
          <p>
            An asylum seeker is someone who is seeking asylum in another
            country. These people are very similar to refugees, however, they
            have not received{" "}
            <Link href="https://www.gov.uk/claim-asylum#:~:text=You%20must%20apply%20for%20asylum,is%20eligible%20to%20claim%20asylum.">
              refugee status
            </Link>
            .
          </p>
          <p>
            Asylum seekers do <b>not</b> have the same rights as a citizen or a
            refugee. They cannot work and are instead eligible for benefits from
            the government.
          </p>
        </VerticalColumn>
      </VerticalColumnContainer>

      <Content>
        <p>
          Here, we will be discussing the issue of the European Refugee Crisis,
          and how it&apos;s an issue, how it affects the environment, and how
          you can help people fleeing their countries.
        </p>

        <h1 id="whats-the-issue">What&apos;s the issue?</h1>
      </Content>

      <ImageTextArea src={refugees1} alt="">
        <p>
          When a country is at war, a lot of its population does not wish to
          continue to live there in conflict, as their lives may be at risk.
          This is why a lot of people choose to seek asylum and become refugees
          in other countries. This alone is not the issue. The issue arises with
          how a lot of these asylum seekers choose to get to Europe.
        </p>
        <p>
          People attempt to get to Europe primarily on small plastic boats. The
          recommended way to reach the UK is through safe, legal routes such as
          legal boats and aeroplanes. Sea conditions change constantly, what may
          be a calm sea one second may become a stormy, violent sea the next.
          This is how{" "}
          <Link href="https://news.sky.com/story/channel-migrants-uk-must-make-itself-less-attractive-to-those-crossing-french-interior-minister-says-12481675">
            27 people died
          </Link>{" "}
          in 2021 whilst attempting to cross the English Channel.{" "}
        </p>
      </ImageTextArea>

      <Content>
        <p>
          The issue has gotten so out of hand that the French interior minister
          has said that the UK must{" "}
          <Link href="https://news.sky.com/story/channel-migrants-uk-must-make-itself-less-attractive-to-those-crossing-french-interior-minister-says-12481675">
            make itself &quot;less economically attractive&quot;
          </Link>
          , saying France will not be &quot;held hostage&quot; by British
          domestic politics.
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          <b>This isn&apos;t the only issue.</b>
        </p>
        <p>
          When people are seeking refugee status, they&apos;re being treated as
          someone else&apos;s problem. Some governments may ignore their
          requests and deny perfectly valid ones.
        </p>
        <p>
          Not to mention, some people are fearful of being &quot;flooded&quot;
          with refugees. Some people think that refugees may ruin the economy,
          culture, etc., even though without the ability to seek refuge in other
          countries, they may die.
        </p>

        <h1 id="how-to-help">What can we do to help?</h1>
        <p>
          A lot of what needs to be done needs to happen at a higher level than
          most of us, at a governmental level. However, this doesn&apos;t mean
          that we can&apos;t raise awareness and help people in conflict escape
          their countries <b>legally</b>.
        </p>

        <h2>1. Campaign</h2>
        <p>
          <Link href="refugee-action.org.uk">Refugee Action</Link> is
          campaigning to allow{" "}
          <Link href="https://www.refugee-action.org.uk/let-refugees-learn/">
            more refugees to learn English
          </Link>
          , and to make changes to the law to{" "}
          <Link href="https://www.refugee-action.org.uk/campaigns/family_reunion/">
            reunite separated refugee families
          </Link>
          .
        </p>

        <h2>2. House refugees</h2>
      </Content>

      <ImageTextArea src={refugeesWelcome} alt="" right>
        <p>
          If you have any vacant rooms in your house, find programmes to allow
          you to house refugees or asylum seekers.{" "}
          <Link href="https://www.refugeesathome.org/">Refugees at Home</Link>{" "}
          is a programme that connects refugees to those with room to spare in
          their houses.
        </p>
        <p>Before you house a refugee, consider a few factors:</p>
        <ul>
          <li>Can I support someone else living here?</li>
          <li>Is there enough space for someone else?</li>
          <li>Do I have the time to learn a new language (if necessary)?</li>
        </ul>
      </ImageTextArea>

      <Content>
        <h2>3. Donate</h2>
        <p>
          Donating is a great way to make a <i>larger</i> change in a
          refugee&apos;s life. By donating to charities that help refugees, you
          allow that charity to go and do work to actively help people.
        </p>
        <Button type="Primary" onClick={toggleCharities}>
          View Charities
        </Button>

        <h2>Some other ideas</h2>
        <ul>
          <li>Encourage local universities to offer refugee scholarships</li>
          <li>
            Offer opportunities to/for refugees, like volunteering or jobs
          </li>
        </ul>

        <div className="seperator" />

        <h1>What can the &quot;higher-ups&quot; do?</h1>
        <p>
          Most of us cannot make the large-scale change that refugees need to
          make travelling to Europe easier, as much as we may want to.
          &quot;Higher-ups&quot; in our government need to make these changes.
        </p>

        <ul>
          <li>
            <b>Create safe entry routes to Europe.</b>
            <br />
            The reason a lot of refugees take dangerous entry methods into
            Europe is because of the inability to find safe and legal methods.
            Giving refugees visas prevents them from spending their savings and
            risking their lives getting to safety.
          </li>
          <li>
            <b>Go to refugees, if at all possible.</b>
            <br />
            When countries make an effort to go to possible refugees themselves
            (by possibly going to countries in war), it means that they do not
            have to spend their life savings to get to a place of safety and
            security. Investing in Search &amp; Rescue teams can be crucial to
            people&apos;s survival.
            <br />
            Of course, this is not always possible. Some countries in war may
            make threats to other countries, stating that they too will be
            attacked if they attempt to assist.
          </li>
          <li>
            <b>
              Make it <i>easier</i> to cross borders.
            </b>
            <br />
            We have borders for a reason: to protect those within the country.
            However, pushing people away and putting up large fences and other
            physical blockages doesn&apos;t stop people from attempting entry,
            it just makes them take other more dangerous routes. When an asylum
            seeker shows up at the borders, offering them a temporary residence
            for their safety, with or without travel documents, should be the
            bare minimum.
          </li>
          <li>
            <b>
              Stop blaming certain issues, like economic or social problems, on
              refugees.
            </b>
            <br />
            This isn&apos;t just unfair to the refugees who simply need a place
            to survive, it also generates a sense of fear of foreigners.
            Governments should be battling all kinds of xenophobia and racial
            discrimination, not promoting it.
          </li>
        </ul>
      </Content>
    </>
  );
}
