<template>
  <div class="q-px-lg q-pb-md">
    <div>Business Plus Plus Overview</div>
    <q-timeline
      dese
      color="secondary"
      v-for="chapter in lists"
      :key="chapter.heading"
    >
      <q-timeline-entry heading class="text-deep-purple">
        {{ chapter.heading }}</q-timeline-entry
      >
      <q-timeline-entry
        class=""
        v-for="lesson in chapter.topics"
        :key="lesson.title"
        :subtitle="lesson.subTitle"
        :icon="lesson.icon"
      >
        <div
          class="cursor-pointer q-mb-sm q-mt-none text-h6"
          @click="
            $router.push({
              name: 'lesson',
              params: { chapter: chapter.headingUrl, topic: lesson.topicUrl }
            })
          "
        >
          {{ lesson.title }}
        </div>
        <div class="row wrap">
          <div class="col-2">
            <q-img
              src="https://placeimg.com/500/300/nature"
              spinner-color="white"
              class="cursor-pointer"
              @click="
                $router.push({
                  name: 'lesson',
                  params: {
                    chapter: chapter.headingUrl,
                    topic: lesson.topicUrl
                  }
                })
              "
            />
          </div>
          <div class="col-10 q-pa-sm">{{ text }}</div>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum earum deleniti culpa debitis! Ipsam aspernatur reprehenderit libero facere dolorum possimus debitis optio dignissimos. Ullam id, magni unde nobis facere autem.",
      lists: [
        {
          heading: "Overview",
          headingUrl: "overview",
          topics: [
            {
              title: "How to Open Software",
              subTitle: "Basic",
              description: "1-1-1",
              topicUrl: "basic",
              icon: "done_all"
            },
            {
              title: "Introduction to software",
              subTitle: "Lesson 2",
              description: "2-1-1",
              topicUrl: "introduction",
              icon: "done_all"
            }
          ]
        },
        {
          heading: "Master",
          topics: [
            {
              title: "Item",
              subTitle: "3-1",
              description: "3-1-1",
              topicUrl: "",
              icon: "done_all"
            },
            {
              title: "Hundekari",
              subTitle: "4-1",
              description: "4-1-1",
              topicUrl: "",
              icon: "done_all"
            },
            {
              title: "Farmer",
              subTitle: "5-1",
              description: "5-1-1",
              topicUrl: "",
              icon: "done_all"
            }
          ]
        }
      ]
    };
  },
  methods: {
    goTo() {
      console.log("inside goTo");
      //this.$router.push({ name: "lesson" });

      this.$router.push({ name: "lesson" }).catch(err => {
        console.log("error", err);
      });
    }
  }
};
</script>
