/** @format */

import Head from 'next/head';
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home({}) {
  const [result, setResult] = useState<number>();
  const [validBinNo, setValidBinNo] = useState<boolean>(true);

  const onHandleChange = (e) => {
    const isValid = !!e.target.value
      ? /^[0-1]{1,22}$/.test(e.target.value)
      : true;
    const dec = parseInt(e.target.value, 2);
    console.log(dec);
    setResult(isValid ? dec : 0);
    setValidBinNo(isValid);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Bin2Dec</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Bin 2 Dec App</div>
        <div className={styles.description}>
          Enter a binary number, get a decimal conversion.
        </div>
        {!validBinNo && (
          <div className={styles.error}>Binary number only allowed 0 and 1</div>
        )}
        <input
          onChange={onHandleChange}
          maxLength={22}
          className={styles.input}
        />
        <div className={styles.result}>
          {result ? `Your decimal number is: ${result}` : ''}
        </div>
      </main>
    </div>
  );
}
