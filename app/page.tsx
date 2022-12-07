import Content from "$components/Content";
import Header from "$components/Header";
import {
  VerticalColumn,
  VerticalColumnContainer,
} from "$components/VerticalColumns";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header id="hero" hero>
        <div className={styles.suptitle}>Lets talk about</div>
        <h1 className="withSuptitle">Europe&apos;s Refugee Crisis.</h1>
      </Header>
      <Content>
        <h1 id="what-is-a-refugee">Firstly, what is a refugee?</h1>
        <p>
          The terms &quot;refuge&quot; and &quot;asylum seeker&quot; tend to get
          mixed up a lot. If you&apos;re unaware of the difference, you can read
          about the definitions of these words below.
        </p>
      </Content>

      <VerticalColumnContainer>
        <VerticalColumn>
          <h2>Refugees</h2>
          <p>
            A refugee is a person who has fled their country due to serious risk
            of human rights violations or persecution. The risks of these people
            staying at their home country are so high that they felt the need to
            leave to seek safety, because their government cannot or will not
            protect them from these dangers.
          </p>
        </VerticalColumn>
        <VerticalColumn>
          <h2>Asylum Seekers</h2>
          <p>
            An asylum seeker is someone who is seeking asylum in another
            country. These people are very similar to refugees, however they
            have not recieved{" "}
            <a href="https://www.gov.uk/claim-asylum#:~:text=You%20must%20apply%20for%20asylum,is%20eligible%20to%20claim%20asylum.">
              refugee status
            </a>
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

        <h1>What&apos;s the issue?</h1>
        <p>
          When a place is in war, a lot of its population do not wish to
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
          <a href="https://news.sky.com/story/channel-migrants-uk-must-make-itself-less-attractive-to-those-crossing-french-interior-minister-says-12481675">
            27 people died
          </a>{" "}
          in 2021 whilst attempting to cross the English Channel.{" "}
        </p>
      </Content>
    </>
  );
}
