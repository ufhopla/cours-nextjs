import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home(props) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Le café | découvrez nos café</title>
      </Head>
      <div className="container mt-3">
        <h1 className="fs-4 m-5 text-center">Café en grain</h1>
        <div className="container d-flex flex-wrap align-items-end">
          {props.data.coffee[0].data.map((el) => (
            <div className="w-25 p-3" key={el.id}>
              <h2 className="fs-5 text-center mb-3">{el.name}</h2>
              <Image
                layout="responsive"
                priority="true"
                width={200}
                height={200}
                src={el.img}
                alt={el.name}
              />
              <div className="d-flex justify-content-between mt-3">
                <h4 className="fs-6">{el.price}&nbsp;€</h4>
                <h4 className="fs-6">Score&nbsp;:&nbsp;{el.score}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const url = "http://localhost:3000/api/coffee";
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { data },
  };
}
