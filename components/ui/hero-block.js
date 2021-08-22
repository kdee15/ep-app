import Image from "next/image";
import classes from "./hero-block.module.css";

function HeroBlock() {
  return (
    <section className={classes.hero}>
      <figure className={classes.logo}>
        <Image
          src="/images/rm-title.svg"
          alt="Rick and Morty"
          width="1200px"
          height="300px"
        />
      </figure>
    </section>
  );
}

export default HeroBlock;
