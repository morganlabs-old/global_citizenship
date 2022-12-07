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
      <Header hero>
        <div className={styles.suptitle}>LETS TALK ABOUT</div>
        <h1>Europe&apos;s Refugee Crisis.</h1>
      </Header>
      <Content>
        <h1 className="centred">Firstly, what is a refugee?</h1>

        <VerticalColumnContainer>
          <VerticalColumn>
            <h1>Hello, world</h1>
          </VerticalColumn>
          <VerticalColumn>
            <h1>Hello, world</h1>
          </VerticalColumn>
        </VerticalColumnContainer>
      </Content>
    </>
  );
}
