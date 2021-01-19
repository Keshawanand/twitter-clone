<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side NAV -->
    <div class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
   <div>  
      <button class="w-12 h-12 hover:bg-lightblue text-3xl text-blue">
      <i class="fab fa-twitter"></i>
    </button>
    <div>
      <button v-for="tab in tabs" @click="id=tab.id" :key="tab.id" :class="` focus:outline-none hover:text-blue flex item-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${tab.id===id?'text-blue':''}`">
      <i :class="`${ tab.icon } text-2xl mr-4 text-left`"></i>
      <p class="text-lg font-semibold text-left hidden lg:block"> {{tab.title}} </p>
      </button>
   </div>
    <button class="text-white bg-blue rounded-full font-semibold w-12 h-12 lg:auto lg:w-full p-3 focus:outline-none hover:bg-darkblue">
     <p class="hidden lg:block"> Tweet</p> 
     <i class="fas fa-plus lg:hidden"></i>
    </button>

    </div>

   <div class="lg:w-full relative">
     <button @click="dropdown=true" class="flex item-center w-full focus:outline-none hover:bg-lighblue rounded-full p-2">
       <img src="profile.jpg" class="w-10 h-10 rounded-full border border-lighter" />
       <div class="ml-4 hidden lg:block">
         <p class="text-sm font-bold">Keshaw Singh</p>
         <p class="text-sm">@keshaw012</p>
       </div>
       <i class="fas fa-angle-down ml-auto text-lg hidden lg:block"></i>
     </button>
     <div v-if="dropdown===true" class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
      <button @click="dropdown=false" class="p-3 flex item-center w-full focus:outline-none hover:bg-lightest">
       <img src="profile.jpg" class="w-10 h-10 rounded-full border border-lighter" />
       <div class="ml-4">
         <p class="text-sm font-bold">Keshaw Singh</p>
         <p class="text-sm">@keshaw012</p>
       </div>
       <i class="fas fa-check ml-auto text-lg"></i>
     </button>
     <button @click="dropdown=false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm focus:outline-none">
       Add an existing account
     </button>
     <button @click="dropdown=false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm focus:outline-none">
       logout @keshaw012
     </button>
     </div>
   </div>
    </div>
<!-- Tweet -->
<div class="w-1/2 h-full">
 <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div class="flex-none">
          <img src="profile.jpg" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
        </div>
        <form v-on:submit.prevent = "addNewTweet" class="w-full px-4 relative">
          <textarea v-model="twee.content" placeholder="What's up?" class="mt-3 pb-3 w-full focus:outline-none"/>
          <div class="flex items-center">
            <i class="text-lg text-blue mr-4 far fa-image"></i>
            <i class="text-lg text-blue mr-4 fas fa-film"></i>
            <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
            <i class="text-lg text-blue mr-4 far fa-smile"></i>
          </div>
          <button type="submit" class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
            Tweet 
          </button>
        </form>
      </div>
      <div class="flex flex-col-reverse">
        <div v-for="(tweet,index) in tweets" :key="index" class="w-full p-4 border-b hover:bg-lighter flex">
          <div class="flex-none mr-4">
            <img src="profile.jpg" class="h-12 w-12 rounded-full flex-none"/>
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold"> Keshaw Singh </p>
              <p class="text-sm text-dark ml-2"> @keshaw012 </p>
              <p class="text-sm text-dark ml-2"> 2 sec </p>
              <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3"></i>
                <p> 1 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="(follow,index) in following" :key="index" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="flex-none mr-4">
          <img :src="`${follow.src}`" class="h-12 w-12 rounded-full flex-none"/>
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold"> {{ follow.name }} </p>
            <p class="text-sm text-dark ml-2"> {{ follow.handle }} </p>
            <p class="text-sm text-dark ml-2"> {{ follow.time }} </p>
            <i class="fas fa-angle-down text-dark ml-auto"></i>
          </div>
          <p class="py-2">
            {{ follow.tweet }}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-comment mr-3"></i>
              <p> {{ follow.comments }} </p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-retweet mr-3"></i>
              <p> {{ follow.retweets }} </p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-heart mr-3"></i>
              <p> {{ follow.like }} </p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>
        </div>
      </div>
</div>
<!-- Trending -->
<div class="md:block hidden w-1/2 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4" placeholder="Search Twitter" />
      <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
      <div class="w-full rounded-lg bg-lightest">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">Trends for You</p>
          <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="trend in trending" :key="trend.title" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
          <div>
            <p class="text-xs text-left leading-tight text-dark"> {{ trend.top}} </p>
            <p class="font-semibold text-sm text-left leading-tight"> {{ trend.title}} </p>
            <p class="text-left text-sm leading-tight text-dark"> {{ trend.bottom}} </p>
          </div>
          <i class="fas fa-angle-down text-lg text-dark"></i>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>
      <div class="w-full rounded-lg bg-lightest my-4">
        <div class=" p-3">
          <p class="text-lg font-bold">Who to Follow</p>
        </div>
        <button v-for="friend in friends" :key="friend.handle" class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
          <img :src="`${ friend.src }`" class="w-12 h-12 rounded-full border border-lighter" />
          <div class="hidden lg:block ml-4">
            <p class="text-sm font-bold leading-tight"> {{ friend.name }} </p>
            <p class="text-sm leading-tight"> {{ friend.handle }} </p>
          </div>
          <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue">
            Follow
          </button>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import sidetabs from '@/models/sidetabs'
import trendings from '@/models/trendings'
import friends from '@/models/friends'
import followings from '@/models/followings'
import { Tweet,tweets} from '@/models/tweets'


// @Component({
//   components: {
  
//   },
// })
@Component
export default class App extends Vue {
  tabs=sidetabs;
  id="home";
  dropdown=false;   
  trending=trendings;
  friends=friends;
  following=followings;
  tweets=tweets;
  twee=new Tweet('');


  addNewTweet(){
    this.tweets.push(new Tweet(this.twee.content));
    
    
    console.log(this.tweets[0]);
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
