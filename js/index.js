// 获取元素
var getElements = function(selector) {
	return document.querySelector(selector);
}

// 获取所有元素

var getAllElements = function(selector) {
	return document.querySelectorAll(selector);
}

// 获取元素样式

var getCls = function(element) {
	return element.getAttribute('class');
}

// 设置元素样式

var setCls = function(element,cls) {
	return element.setAttribute('class',cls);
}

//为元素添加样式

var addCls = function(element,cls) {
	var baseCls = getCls(element);
	if(baseCls.indexOf(cls) === -1) {
		setCls(element,baseCls+' '+cls);
	}
}

//为元素删除样式

var delCls = function(element,cls) {
	var baseCls = getCls(element);
	if(baseCls.indexOf(cls) != -1 ){
		setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
	}
}

//第一步：初始化样式init

var screenAnimateElements = {
	'.screen_1' : [
		'.screen-1-heading',
		'.screen_phone',
		'.screen_shedow'
	],
	'.screen_2' : [
		'.screen-2-heading',
		'.screen-2-subheading',
		'.screen-2_phone',
		'.screen-2_point_i-1',
		'.screen-2_point_i-2',
		'.screen-2_point_i-3'
	],
	'.screen_3' : [
		'.screen-3-heading',
		'.screen-3-subheading',
		'.screen-3__phone',
		'.screen-3__feature'
	],
	'.screen-4' : [
		'.screen-4_heading',
		'.screen-4_subheading',
		'.screen-4_type_item-i-1',
		'.screen-4_type_item-i-2',
		'.screen-4_type_item-i-3',
		'.screen-4_type_item-i-4'
	],
	'.screen-5' : [
		'.screen-5_heading',
		'.screen-5_subheading',
		'.screen-5_back'
	],
};

//设置元素初始化
var setScreenAnimateInit = function (screenCls){
	var screen = document.querySelector(screenCls); //获取当前屏的元素
	var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素

	for(var i =0; i < animateElements.length; i++) {
		var element = document.querySelector(animateElements[i]);
		var baseCls = element.getAttribute('class');
		element.setAttribute('class',baseCls + ' ' + animateElements[i].substr(1)+'-init');
	}
}

//设置播放屏内动画

var setScreenAnimateDone = function(screenCls) {
	var screen = document.querySelector(screenCls); //获取当前屏的元素
	var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素

	for(var i =0; i < animateElements.length; i++) {
		var element = document.querySelector(animateElements[i]);
		var baseCls = element.getAttribute('class');
		element.setAttribute('class',baseCls.replace('-init','-done'));
	}
}

window.onload = function() {
	for(k in screenAnimateElements) {
		if(k === '.screen_1')
			continue;
		setScreenAnimateInit(k);
	}
}

//第二步：滚动到哪里就播放哪里

var navItem = getAllElements('.header__nav-item');
var outlineItem = getAllElements('.outline__item');

var switchNavItemActive = function ( idx ) {
	for(var i = 0; i < navItem.length; i++) {
		delCls(navItem[i],'header__nav-item_status-active');
	}
	addCls(navItem[idx],'header__nav-item_status-active');

	for(var i = 0; i < outlineItem.length; i++) {
		delCls(outlineItem[i],'outline__item_status_active');
	}
	addCls(outlineItem[idx],'outline__item_status_active');
}

window.onscroll = function(){
	var top = document.body.scrollTop;
	if(top > 80) {
		addCls(getElements('.header'),'header_stadus_back');
		addCls(getElements('.outline'),'outline_stadus_in');
	}
	else {
		delCls(getElements('.header'),'header_stadus_back');
		delCls(getElements('.outline'),'outline_stadus_in');

		switchNavItemActive(0);
	}

	if(top > 1) {
		setScreenAnimateDone('.screen_1');

	}
	if(top > 800*1 - 100) {
		setScreenAnimateDone('.screen_2');
		switchNavItemActive(1);

	}
	if(top > 800*2 - 100) {
		setScreenAnimateDone('.screen_3');
		switchNavItemActive(2);

	}
	if(top > 800*3 - 100) {
		setScreenAnimateDone('.screen-4');
		switchNavItemActive(3);

	}
	if(top > 800*4 - 100) {
		setScreenAnimateDone('.screen-5');
		switchNavItemActive(4);

	}
}

//双向定位


var setNavJump = function(i,liabl) {
	var item = liabl[i];
	item.onclick =function(){
		document.body.scrollTop = i*800;
	}
}

for(var i = 0; i < navItem.length; i++) {
	setNavJump(i,navItem);
}

for(var i = 0; i < outlineItem.length; i++) {
	setNavJump(i,outlineItem);
}

// 滑动门特效

var navTip = getElements('.header_nav-tip');
var setTip = function(idx,lib) {
	lib[idx].onmouseover = function(){
		navTip.style.lfet = (idx * 100 ) + 'px';
	}

	var activeIdx = 0;
	lib[idx].onmouseout =function(){
		for(var i = 0; i < lib.length; i++) {
			if( getCls(this).indexOf('.header__nav-item_status-active'));
			activeIdx = i;
			break;
		}
		navTip.style.lfet = (idx * 100) + 'px';
	}
}

for(var i = 0; i < navItem.length; i++) {
	setTip(i,navItem);
}

setTimeout(function(){
	setScreenAnimateDone('.screen_1');
},200)






































