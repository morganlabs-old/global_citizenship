import ActionRow from "$components/ActionRow";
import Button from "$components/Button";
import Content from "$components/Content";
import Header from "$components/Header";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header hero>
        <div className={styles.suptitle}>LET'S TALK ABOUT</div>
        <h1>Europe&apos;s Refugee Crisis.</h1>
      </Header>
      <Content>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet, incididunt reprehenderit sint sit anim
          incididunt exercitation id ea adipisicing incididunt voluptate ipsum
          eiusmod. Lorem proident reprehenderit sint excepteur aliquip amet
          pariatur elit. Eiusmod qui quis mollit laboris in ex ut fugiat enim
          elit eiusmod culpa cupidatat pariatur. Cupidatat ea ipsum consectetur
          incididunt proident. Sint ex minim ut cillum aliqua reprehenderit
          officia esse officia minim reprehenderit enim magna.
        </p>
        <p>
          Irure consequat nulla sint duis laboris sit exercitation enim. Et
          tempor nisi voluptate do ut et velit consequat veniam. Tempor quis
          excepteur nulla sunt veniam anim aliquip do laborum excepteur in duis
          aliquip pariatur nostrud. Aute ex aliquip cillum qui dolor quis
          laborum dolor et qui aliqua aliqua. Quis dolor nostrud proident mollit
          enim anim ipsum ad qui commodo quis exercitation excepteur proident
          in. Esse elit deserunt ullamco non nisi magna aliqua nulla fugiat
          ipsum. Aliquip sunt officia fugiat eiusmod dolor velit veniam.
        </p>

        {/* <ActionRow>
          <Button type="Primary" onClick={() => alert("Alert")}>
            Regular button
          </Button>
          <Button type="Secondary" href="https://github.com/Morgan-GB">
            Link button
          </Button>
        </ActionRow> */}
      </Content>
    </>
  );
}
