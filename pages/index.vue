<template>
  <v-container class="pa-2 my-0" fluid>
    <div class="h-spacer"></div>
    <v-sheet tag="header" class="pa-10" color="primary">
      <v-row no-gutters>
        <v-col>
          <h1 class="text-h3">
            Faktenforum
            <small class="text-subtitle-1"> Take action against missinformation </small>
          </h1>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" xs="12" sm="10" md="7" lg="6">
          <div class="text-subtitle-1">
            On CORRECTIV.Faktenforum people take action to counter disinformation and train their
            media and information literacy skills. Journalistic experience is not required.
          </div>
        </v-col>
      </v-row>

      <div class="text-subtitle-1">Every contribution counts - which is yours?</div>
    </v-sheet>
    <div class="h-spacer"></div>
    <v-sheet tag="section" class="pa-10">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
          <h2>{{ $t("landingPage.callToActions.join.title") }}</h2>
          <span>
            {{ $t("landingPage.callToActions.join.text") }}
          </span>
          <v-text-field
            density="compact"
            type="email"
            label="Email address"
            dense
            variant="outlined"
          />
          <v-btn class="w-100" color="primary" variant="outlined"> Sign Up </v-btn>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
          <h2>{{ $t("landingPage.callToActions.submit.title") }}</h2>
          <span>
            {{ $t("landingPage.callToActions.submit.text") }}
          </span>
          <NuxtLink to="/submission/">
            <v-btn class="w-100" color="primary" variant="outlined"> Submit Claim </v-btn>
          </NuxtLink>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <h2>{{ $t("landingPage.callToActions.learn.title") }}</h2>
          <span>
            {{ $t("landingPage.callToActions.learn.text") }}
          </span>

          <v-list :items="learnMoreItems" item-props lines="two">
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
            <template v-slot:prepend="{ item }">
              <v-container fluid class="pa-0 pr-2 ma-0">
                <v-img :width="70" aspect-ratio="4/3" cover :src="item.prependAvatar" />
              </v-container>
            </template>
          </v-list>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>
<script lang="ts" setup>
const learnMoreItems = ref([
  {
    prependAvatar: "https://dummyimage.com/4:3x60/",
    title: "10 tips",
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
  },
  { type: "divider", inset: false },
  {
    prependAvatar: "https://dummyimage.com/4:3x60/",
    title: "Infoflyer",
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
  },
  { type: "divider", inset: false },
  {
    prependAvatar: "https://dummyimage.com/4:3x60/",
    title: "How to",
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
  }
]);
</script>
<style scoped>
.v-container {
  max-width: 1066px;
  min-height: 100%;
}
h1 small {
  display: block;
}
.v-container > :nth-child(1).h-spacer {
  height: 10px;
}
.h-spacer {
  height: 60px;
}
</style>
