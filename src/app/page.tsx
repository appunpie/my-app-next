import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>こんにちは！！！</h1>
      <Image src="/images/test.svg" alt="" width={72} height={16} />
    </div>
  );
}