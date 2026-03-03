const { fetchCards, fetchSingleCard, addCard, updateCard, deleteCard } = require('../database/db');

async function cardMain() {
    const newCard = await addCard("Eevee", 3, 150, 7, 6);
    console.log(newCard);
    const updatedCard = await updateCard(11, "Eevee", 8, 173, 7, 6);
    console.log(updatedCard);
    const deletedCard = await deleteCard(11);
    console.log(deletedCard);
    const cards = await fetchCards();
    console.log(cards);
    const singleCard = await fetchSingleCard("Houndoom");
    console.log(singleCard);
}

cardMain();