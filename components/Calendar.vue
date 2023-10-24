<template>
  <div class="v-list v-theme--light v-list--density-default v-list--two-line">
    <div v-for="item in events">
      <div class="v-list-item-title">
        <a v-if="item.url" :href="item.url">{{ item.title }}</a>
        <span v-else class="v-list-item-title">{{ item.title }}</span>
      </div>
      <div class="v-list-item-subtitle">
        <span class="text-primary"> {{ item.date }} @ {{ item.time }} </span> -
        {{ item.description }}
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";

let events = useState("events", () => null);

onMounted(async () => {
  axios
    .get(
      "https://docs.google.com/spreadsheets/d/1LMXBxJ9tE4fwL3Fj9yJ5xf2g6u7lr0h7A0HDVpP7g3A/gviz/tq"
    )
    .then((res) => {
      // remove query response junk
      var jsonData = res.data
        .replace("/*O_o*/\n", "")
        .replace(/(^google\.visualization\.Query\.setResponse\(|\);$)/g, "");

      var responseJSON = JSON.parse(jsonData);
      var rowsArray = [];
      responseJSON.table.rows.forEach(function (row) {
        rowsArray.push({
          date: row.c[0].v,
          time: row.c[1].v,
          title: row.c[2].v,
          url: row.c[3] ? row.c[3].v : null,
          description: row.c[4] ? row.c[4].v : null
        });
      });
      events.value = rowsArray;
    })
    .catch((error) => console.log(error));
});
</script>
