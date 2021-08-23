import Head from "next/head";
function Header() {
  return (
    <Head>
      <meta name="title" content="Rick and Morty NextJS" />
      <meta name="description" content="Test NextJS Site" />
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
  );
}

export default Header;
