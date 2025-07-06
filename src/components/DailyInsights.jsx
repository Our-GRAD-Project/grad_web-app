import React from 'react';

const insights = [
  {
    title: 'Read Better',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBo8qrq5ROzeLgpVJgWaqISGT-7eAqIYPYg7cWx1vFL7mQeRu3uG8_dsdCRtpPcY3Zz3D0U4OWv1ZVr5oY7dnAvEgwjpbe-Gw2TKVr3L5q7wjRY0v2cQwHn8ZH4YsQV8FqRlrwNr77yCpBPHxiCLwR_gD-uEydBnpLDaqtSTpkLwa_sC3Sa3GtPQnXPJqQ6t6S7tV228mNUU_oHbCnB0zC6hOdrSBaAfJy6ETm6Tf4E5bq258kbzUx6DlRAbPIpJ3IF6uBTSRqYc2HM',
  },
  {
    title: 'Remember More',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3L2D6lfl2nMBZix2PNi3aswVADBDQozmxuB8z4j7VHIJNncccrflY2o8eAdV_0wbt5IclcHe4rhPlgzgfmAtuOwes1vozpfjhJlhTwC3M3qT2W0wy2pyk4PJh0daG--aZ1Hr_8HNcj8Qo4GCs9hYqDfJjQ6iJaD_g-c_1JAGzLMsJsM5E3XCB65wpDmKsJJ50VyRnamVfUj-7G7rhSN_tqatuuBDt2Sgkm14TOe74O8BUGc2Nr7yXPPnk_CzFZEn76ChoNIcjrZdw',
  },
  {
    title: 'Apply Ideas',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAE_zmmLDgLZ1NKiXHLapCUzw71DTVMvasfzgDa3g0dqOsQPfY95nutQjamcx7TLUDb00RqqS0OB1hxK_sf8SR8RrA3VbGQXHMF1qWsVX-Tv06SPJCi3zVCMlB0KCfxYtdUkYR3VMUBBoBYNcskjtKAKhKqh7fZY4jzOW7cKPB8_XCRk_bYkH5kjnpf8elpovd8DzSUx1ZHuM9A9ZZ61_l9_xtaeHbBuy6IhEw6eu-JzUt_ZFOF9OaqxIMmmG9Pb0WmHDNuaCXtgiY2',
  },
  {
    title: 'Stay Inspired',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-Ua_b4ruYxGASH6AIC7xN5ZiaNYiSGtZSa4oR-dKA3lZ8s5p1kLEqbuhEnhNzIAzWxF2iR4bYUJlUMZ3dLEOQaF5F-ud26wA4lu7szAsBIR-TseEZe6n82OpalNr1-PvE8OJWiBXecG0AkePcMyn1FVCiAFnVVSyiv1HPoIvzcpocyP_6OTe1rbCeartrdZF0Qa_8f37bKp-ugtLDRhBbVasmfzXPePxnAwYcTSk20ppzpS5K403Lyr6-JGnybb-qnW9x4sWxpn3',
  },
  {
    title: 'Future Tip',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-MBpNqK_eKxtQ0uc9tWRn0mJQIdBEQZPBW8rbbB1LSap3hVOe8rkvE-gGgjXJb4_qu0zmYUq8g6QHoo6ZNYslJfZW3oMlC2Dhfe7_byszGTUkbih9U2g3cXmbikeF0UtuPmjGgznAVzJeRCn5sfJWqxH9kb5Cs1gSC4fZyXntSKM3tS7O7NY0Un8K6vD_GieDB_IL8sSgt8MbGvqDJzU4-sH1Ciu-8M-pAKEZc1OtNjoJ9uiu_bmaqFZf9Fcu8hMUfCw_iSqHh5z_',
  },
];

const DailyInsights = () => {
  return (
    <>
      <h2 className="text-[#141316] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Daily Insights / Spaced Repetition Tools
      </h2>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                style={{ backgroundImage: `url("${insight.image}")` }}
              ></div>
              <p className="text-[#141316] text-base font-medium leading-normal">{insight.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DailyInsights;