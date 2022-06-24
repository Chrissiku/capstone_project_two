/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-duplicates */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
const postLike = (movies) => {
  fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bj33OEQX34RPwoGeJ8eJ/likes",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        item_id: movies,
      }),
    }
  );
};

export default postLike;
