exports.handler = async (event, context) => {
  const characters = [
    {
      name: 'Ai Hoshino',
      original_name: 'アイ',
      cv: '高橋李依 - Takahashi Rie',
      image: 'https://i.ibb.co/Gd26fHT/ai.png',
      icon: 'https://i.ibb.co/J3f11KL/ai-icon.png',
      description: 'Ai Hoshino is the lead idol of B-Komachi, an idol group affiliated with Strawberry Productions. Before her idol work, she was a bumpkin who had no professionalism.'
    },
    {
      name: 'Aquamarine Hoshino',
      original_name: 'アクア',
      cv: '大塚剛央 - Otsuka Takeo',
      image: 'https://i.ibb.co/n67L7mS/aqua.png',
      icon: 'https://i.ibb.co/xh8HFzZ/aqua-icon.png',
      description: "Aquamarine Hoshino was once a middle-aged Japanese doctor named Gorou who was killed by a stalker. His death was due to Ai, a famous idol who was his patient. After his death, Gorou was reincarnated as Aquamarine, Ai's son."
    },
    {
      name: 'Ruby Hoshino',
      original_name: 'ルビー',
      cv: '伊駒ゆりえ - Igoma Yurie',
      image: 'https://i.ibb.co/m4shBbf/ruby.png',
      icon: 'https://i.ibb.co/VDNyTHX/ruby-icon.png',
      description: "Ruby Hoshino is the sister of Aquamarine Hoshino. She's aiming to become an idol."
    }
  ]

  const data = JSON.stringify(characters)

  return {
    statusCode: 200,
    body: data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }
  }
}
