function getParticipants(handshakes) {
  let ferm = 1;

  for (let i = 0; i < handshakes; i++) {
      handshakes = handshakes - i;
      ferm++;
  }
  console.log(ferm);
  return ferm;
}


    /*
    Каждый из 4 человек пожал руки трем другим людям. 
    Произведение 3 · 4 = 12 дает удвоенное число рукопожатий. 
    Действительно, в этом расчете учтено, что первый пожал руку второму, а второй – первому, на самом же деле было одно рукопожатие. 
    Итак, число рукопожатий равно: (4 · 3) : 2 = 6.
*/


  assert.strictEqual(getParticipants(0), 1)
  assert.strictEqual(getParticipants(1), 2)
  assert.strictEqual(getParticipants(3), 3)
  assert.strictEqual(getParticipants(6), 4)
  assert.strictEqual(getParticipants(7), 5)