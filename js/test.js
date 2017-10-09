
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

function setScreenAnimate(screenCls) {
	var screen = document.querySelector(screenCls); //获取当前屏的元素
	var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素

	var isSetAnimateClass = false; //是否有初始化子元素的样式

	var isAnimateDone = false; //是否所有子元素的样式为done？

	screen.onclick = function() {
		//	初始化样式，增加init
		if(isSetAnimateClass === false) {
			for(var i =0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class',baseCls + ' ' + animateElements[i].substr(1)+'-init');
			}
			isSetAnimateClass = true;
			return;
		}
		//	切换所有animateElements 的init -> done
		if(isAnimateDone === false) {
			for(var i =0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('-init','-done'));
			}

			isAnimateDone = true;
			return;
		}
		//	切换所有animateElements 的done -> init
		if(isAnimateDone === true) {
			for(var i =0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('-done','-init'));
			}

			isAnimateDone = false;
			return;
		}
	}
}

for(k in screenAnimateElements) {
	setScreenAnimate(k);
}














































