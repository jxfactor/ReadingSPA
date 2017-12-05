import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  totalPerson: 0,
  tempGender: 0,
  tempAge: 0,
  tempReadingTime: 0,  
  list: [{
  	name : '社交网站的算法，如何决定动态的排序',
  	image : 'http://upload-images.jianshu.io/upload_images/3459828-463059db5c6cf44a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700'
  },{
  	name : '碳家族添新丁：我科学家预言的T-碳问世',
  	image : 'http://i.guancha.cn/news/2017/11/24/20171124095106213.jpg'
  },{
  	name : '硬盘不是“背锅侠”',
  	image : 'http://upload-images.jianshu.io/upload_images/3134011-dc496354dd1a21a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
  	name : '实践1年后，我发现梦想清单这么写更容易实现哦',
  	image : 'http://upload-images.jianshu.io/upload_images/2088574-88c560ce461707e2.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
  	name : '歧视低端，是社会之耻',
  	image : 'http://upload-images.jianshu.io/upload_images/326721-4d39846f9d7e26b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
  	name : '暗恋，是一个人的兵荒马乱',
  	image : 'http://upload-images.jianshu.io/upload_images/861835-c0b22b86d4e899b8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
  	name : '毕业后，你再也不是那个风马少年……',
  	image : 'http://upload-images.jianshu.io/upload_images/1665079-a48053cf15a072c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }], 
  detail_List: [{
  	name : '社交网站的算法，如何决定动态的排序',
  	html:'<h1>gogogog</h1>'
  },{
  	name : '碳家族添新丁：我科学家预言的T-碳问世',
  	html:'</div><p><br></p><h1>2</h1><p>我家的阿姨也快七年了。</p><p>这些年里，我管她叫“阿姨”，不是对某种职业的称谓，而是后生对长辈的敬语。</p><p>但我猜她并不理解，至少不是真的认同。因为在劝说了无数次之后，她依然坚持管我叫“少爷”。也不知道自小在公房和弄堂长大，向来与香车名马绝缘的我，和这种琼瑶偶像剧里的抬头，究竟有哪门子关系。</p><p>可能是见多了各式各样的雇主，阿姨总是谨小慎微，恨不得低到尘埃里。</p><p>但我很多次都想和她说，她时常说起的农村经历，对我是很有趣的见闻，她在洒扫时的专注投入，也常令我叹服不已。</p><p>钱很重要，却从来不是划分人与人的唯一标准。但凡有一次，我觉得她低端，就不会像现在这样毫无顾虑地把家门钥匙交付到她手里。</p><p>只不过，并不是每个人都用差异而非高低来看问题。尤其是阿姨自己。</p><p>昨天看到前辈扫舍的好文《十九年的阿姨》，有太多动人的细节，讲述她家的阿姨四翠如何悉心融入，最后成为她的家人。</p><p>其中最打动我的是这句话：</p><blockquote><p>贫穷不是罪过，贫穷的人努力挣扎，拼命工作，养活家人，让孩子受到教育，是更加令人敬佩和尊重的。对他们的歧视，是这个社会的耻辱。</p></blockquote><p><br></p><h1>3</h1><p>聪明如你，应该知道为什么要写今天这篇文章。</p><p>这些天的新闻，看得人心绪难平。规则与治理是一回事，人情与人道又是另一回事。而比鸡蛋和石头的对撞更残酷的，是鸡蛋对鸡蛋的轻蔑：人分中高低端，钱有十百千万，论迹不论心，笑贫不笑娼。</p><p>社会达尔文主义横行，不论过去，不问缘由，永远用“适者生存”的强势逻辑笼罩复杂幽深的现实疑难。</p><p>择业求职屡屡被打击，谁让你读不好书，反正是活该。逃票翻墙被老虎咬死，管你穷或富，反正是活该。租住隔间被驱赶疏散，既然不合规，反正是活该。</p><p>我能理解这些“活该”背后的有理有据，也坚持规则应该成为共识，但规则通常直指当下，“活该”却有更深远的源头。</p><p>如果你了解中国的现实，会真切地知道，不是每个人都有机会念书，不是每个人都有可能挣钱，不是每个人都有幸运去追逐本应顺理成章的幸福。或许从一出生，他们就注定要走崎岖遥远的路。</p><p>一个良性的社会，不是没有贫穷困苦，但要给贫穷困苦以翻身的通道。一个良性的舆论，不是没有异见分歧，但要给异见分歧以存在的空间。一个个体的认知，不是没有偏见谬误，但要给偏见谬误以更迭的机制。</p><p>很遗憾，这个寒冷的冬天，只有朋友圈里的普通人，彼此唏嘘，抱团取暖。</p><p><br></p><h1>4</h1><p>我不是激进的人，见识也浅，不敢条分缕析地预言“灰犀牛”，也不会强调“雪崩时，没有一片雪花是无辜的”。</p><p>但我坚持一段话。这段话的作者是约翰多恩，后来被海明威引用，放在《丧钟为谁而鸣》的扉页上：</p><blockquote><p>没有人是一座孤岛，可以自全，</p><p>每个人都是大陆的一片，整体的一部分。</p><p>如果海水冲掉一块，欧洲就减小，</p><p>如同一个海岬失掉一角，</p><p>如同你的朋友或者你自己的领地失掉一块，</p><p>任何人的死亡都是我的损失，</p><p>因为我是人类的一员，</p><p>因此，不要问丧钟为谁而鸣，</p><p>它就为你而鸣。</p></blockquote><p><br></p><p>要是人间注定摇摇晃晃，希望你我都捧好一颗温柔心，勇敢向前行。</p>        </div>'
  },{
  	name : '硬盘不是“背锅侠”',
  	html:''
  },{
  	name : '实践1年后，我发现梦想清单这么写更容易实现哦',
  	html:''
  },{
  	name : '歧视低端，是社会之耻',
  	html:''
  },{
  	name : '暗恋，是一个人的兵荒马乱',
  	html:''
  },{
  	name : '毕业后，你再也不是那个风马少年……',
  	html:''
  }],
  person_list: [{
    id: 0,
    gender: 1, 
    age: 25,
    reading_time: 2
  }]
};
/*
const detail = {
  
}*/

export default new Vuex.Store({
  state,
})