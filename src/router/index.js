import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Document from '@/components/Document'
import Demographic from '@/components/Demographic'

Vue.use(Router)

export default new Router({
	routes: [{
		path : '/',
		name: 'home',
  		component : Home
	},{ 
    	path : '/list',
    	name: 'list',
    	component : List
	},{
    	path : '/document/:id',
    	name: 'document',
    	component : Document
	},{
        path : '/demographic/:tag',
        name: 'demographic',
        component : Demographic
    }]
})
