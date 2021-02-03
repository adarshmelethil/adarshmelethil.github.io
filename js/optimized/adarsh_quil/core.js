// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('adarsh_quil.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.perlin_wave');
goog.require('adarsh_quil.img_paint_stroke');
goog.require('adarsh_quil.bubble');
adarsh_quil.core.settings = (function adarsh_quil$core$settings(){
return quil.core.smooth.cljs$core$IFn$_invoke$arity$0();
});
adarsh_quil.core.screen_size_ratio = (1);
adarsh_quil.core.screen_size = (function adarsh_quil$core$screen_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6926 = (adarsh_quil.core.screen_size_ratio * quil.core.width());
return Math.round(G__6926);
})(),(function (){var G__6927 = (adarsh_quil.core.screen_size_ratio * quil.core.height());
return Math.round(G__6927);
})()], null);
});
adarsh_quil.core.profile_size = (function adarsh_quil$core$profile_size(){
var min_screen_side = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,adarsh_quil.core.screen_size());
var profile_side = (0.6 * min_screen_side);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [profile_side,profile_side], null);
});
adarsh_quil.core.setup = (function adarsh_quil$core$setup(){
quil.core.frame_rate((60));

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$weight,(0),cljs.core.cst$kw$background,adarsh_quil.perlin_wave.background_perlin_wave((0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.width(),quil.core.height()], null)),cljs.core.cst$kw$screen,adarsh_quil.img_paint_stroke.screen_paint_stoke((0),adarsh_quil.core.screen_size()),cljs.core.cst$kw$profile,adarsh_quil.bubble.profile_bubble_img((1),adarsh_quil.core.profile_size())], null);
});
adarsh_quil.core.update_weight = (function adarsh_quil$core$update_weight(p__6931){
var map__6932 = p__6931;
var map__6932__$1 = (((((!((map__6932 == null))))?(((((map__6932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6932):map__6932);
var state = map__6932__$1;
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6932__$1,cljs.core.cst$kw$weight);
var finished = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__6932,map__6932__$1,state,weight){
return (function (p1__6928_SHARP_){
return adarsh_quil.common.done_QMARK_(cljs.core.second(p1__6928_SHARP_));
});})(map__6932,map__6932__$1,state,weight))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6932,map__6932__$1,state,weight){
return (function (p1__6929_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(adarsh_quil.common.weight(cljs.core.second(p1__6929_SHARP_)),weight);
});})(map__6932,map__6932__$1,state,weight))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6932,map__6932__$1,state,weight){
return (function (p1__6930_SHARP_){
var G__6934 = cljs.core.second(p1__6930_SHARP_);
if((!((G__6934 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6934.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6934.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6934);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6934);
}
});})(map__6932,map__6932__$1,state,weight))
,state)));
if((((cljs.core.count(finished) > (0))) && (cljs.core.every_QMARK_(cljs.core.true_QMARK_,finished)))){
return (weight + (1));
} else {
return weight;
}
});
adarsh_quil.core.update_state = (function adarsh_quil$core$update_state(p__6937){
var map__6938 = p__6937;
var map__6938__$1 = (((((!((map__6938 == null))))?(((((map__6938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6938):map__6938);
var state = map__6938__$1;
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6938__$1,cljs.core.cst$kw$weight);
var seq__6940_6962 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6938,map__6938__$1,state,weight){
return (function (p1__6935_SHARP_){
var and__4120__auto__ = (function (){var G__6953 = cljs.core.second(p1__6935_SHARP_);
if((!((G__6953 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6953.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6953.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6953);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6953);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight(cljs.core.second(p1__6935_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
});})(map__6938,map__6938__$1,state,weight))
,state));
var chunk__6941_6963 = null;
var count__6942_6964 = (0);
var i__6943_6965 = (0);
while(true){
if((i__6943_6965 < count__6942_6964)){
var vec__6954_6966 = chunk__6941_6963.cljs$core$IIndexed$_nth$arity$2(null,i__6943_6965);
var __6967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6954_6966,(0),null);
var v_6968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6954_6966,(1),null);
adarsh_quil.common.render(v_6968);


var G__6969 = seq__6940_6962;
var G__6970 = chunk__6941_6963;
var G__6971 = count__6942_6964;
var G__6972 = (i__6943_6965 + (1));
seq__6940_6962 = G__6969;
chunk__6941_6963 = G__6970;
count__6942_6964 = G__6971;
i__6943_6965 = G__6972;
continue;
} else {
var temp__5735__auto___6973 = cljs.core.seq(seq__6940_6962);
if(temp__5735__auto___6973){
var seq__6940_6974__$1 = temp__5735__auto___6973;
if(cljs.core.chunked_seq_QMARK_(seq__6940_6974__$1)){
var c__4550__auto___6975 = cljs.core.chunk_first(seq__6940_6974__$1);
var G__6976 = cljs.core.chunk_rest(seq__6940_6974__$1);
var G__6977 = c__4550__auto___6975;
var G__6978 = cljs.core.count(c__4550__auto___6975);
var G__6979 = (0);
seq__6940_6962 = G__6976;
chunk__6941_6963 = G__6977;
count__6942_6964 = G__6978;
i__6943_6965 = G__6979;
continue;
} else {
var vec__6957_6980 = cljs.core.first(seq__6940_6974__$1);
var __6981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6957_6980,(0),null);
var v_6982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6957_6980,(1),null);
adarsh_quil.common.render(v_6982);


var G__6983 = cljs.core.next(seq__6940_6974__$1);
var G__6984 = null;
var G__6985 = (0);
var G__6986 = (0);
seq__6940_6962 = G__6983;
chunk__6941_6963 = G__6984;
count__6942_6964 = G__6985;
i__6943_6965 = G__6986;
continue;
}
} else {
}
}
break;
}

var new_state = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__6938,map__6938__$1,state,weight){
return (function (p1__6936_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__6936_SHARP_),(((function (){var and__4120__auto__ = (function (){var G__6961 = cljs.core.second(p1__6936_SHARP_);
if((!((G__6961 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6961.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6961.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6961);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6961);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight(cljs.core.second(p1__6936_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
})())?adarsh_quil.common.next_state(cljs.core.second(p1__6936_SHARP_)):cljs.core.second(p1__6936_SHARP_))],null));
});})(map__6938,map__6938__$1,state,weight))
,state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$weight,adarsh_quil.core.update_weight(new_state));
});
adarsh_quil.core.draw_state = (function adarsh_quil$core$draw_state(p__6987){
var map__6988 = p__6987;
var map__6988__$1 = (((((!((map__6988 == null))))?(((((map__6988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6988):map__6988);
var state = map__6988__$1;
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6988__$1,cljs.core.cst$kw$background);
var screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6988__$1,cljs.core.cst$kw$screen);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6988__$1,cljs.core.cst$kw$profile);
var dark_blue_6993 = quil.core.color.cljs$core$IFn$_invoke$arity$3((16),(67),(115));
quil.core.background.cljs$core$IFn$_invoke$arity$1(dark_blue_6993);

quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(background),(0),(0));

var vec__6990 = adarsh_quil.core.screen_size();
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6990,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6990,(1),null);
var screen_offset_x = ((quil.core.width() - screen_width) / (2));
var screen_offset_y = ((quil.core.height() - screen_height) / (2));
var profile_offset = ((function (){var x__4222__auto__ = screen_offset_x;
var y__4223__auto__ = screen_offset_y;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() + ((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,adarsh_quil.core.screen_size()) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,adarsh_quil.core.profile_size())) / (2)));
quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(screen),screen_offset_x,screen_offset_y);

return quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(profile),profile_offset,profile_offset);
});
adarsh_quil.core.run_sketch = (function adarsh_quil$core$run_sketch(){
adarsh_quil.core.adarsh_quil = (function adarsh_quil$core$run_sketch_$_adarsh_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"adarsh-quil",cljs.core.cst$kw$settings,((cljs.core.fn_QMARK_(adarsh_quil.core.settings))?(function() { 
var G__6994__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.settings,args);
};
var G__6994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6995__i = 0, G__6995__a = new Array(arguments.length -  0);
while (G__6995__i < G__6995__a.length) {G__6995__a[G__6995__i] = arguments[G__6995__i + 0]; ++G__6995__i;}
  args = new cljs.core.IndexedSeq(G__6995__a,0,null);
} 
return G__6994__delegate.call(this,args);};
G__6994.cljs$lang$maxFixedArity = 0;
G__6994.cljs$lang$applyTo = (function (arglist__6996){
var args = cljs.core.seq(arglist__6996);
return G__6994__delegate(args);
});
G__6994.cljs$core$IFn$_invoke$arity$variadic = G__6994__delegate;
return G__6994;
})()
:adarsh_quil.core.settings),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(adarsh_quil.core.update_state))?(function() { 
var G__6997__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.update_state,args);
};
var G__6997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6998__i = 0, G__6998__a = new Array(arguments.length -  0);
while (G__6998__i < G__6998__a.length) {G__6998__a[G__6998__i] = arguments[G__6998__i + 0]; ++G__6998__i;}
  args = new cljs.core.IndexedSeq(G__6998__a,0,null);
} 
return G__6997__delegate.call(this,args);};
G__6997.cljs$lang$maxFixedArity = 0;
G__6997.cljs$lang$applyTo = (function (arglist__6999){
var args = cljs.core.seq(arglist__6999);
return G__6997__delegate(args);
});
G__6997.cljs$core$IFn$_invoke$arity$variadic = G__6997__delegate;
return G__6997;
})()
:adarsh_quil.core.update_state),cljs.core.cst$kw$size,(function (){var width = (function (){var or__4131__auto__ = window.innerWidth;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.body.clientWidth;
}
})();
var height = (function (){var or__4131__auto__ = window.innerHeight;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.body.clientHeight;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null);
})(),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(adarsh_quil.core.setup))?(function() { 
var G__7000__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.setup,args);
};
var G__7000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7001__i = 0, G__7001__a = new Array(arguments.length -  0);
while (G__7001__i < G__7001__a.length) {G__7001__a[G__7001__i] = arguments[G__7001__i + 0]; ++G__7001__i;}
  args = new cljs.core.IndexedSeq(G__7001__a,0,null);
} 
return G__7000__delegate.call(this,args);};
G__7000.cljs$lang$maxFixedArity = 0;
G__7000.cljs$lang$applyTo = (function (arglist__7002){
var args = cljs.core.seq(arglist__7002);
return G__7000__delegate(args);
});
G__7000.cljs$core$IFn$_invoke$arity$variadic = G__7000__delegate;
return G__7000;
})()
:adarsh_quil.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(adarsh_quil.core.draw_state))?(function() { 
var G__7003__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.draw_state,args);
};
var G__7003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7004__i = 0, G__7004__a = new Array(arguments.length -  0);
while (G__7004__i < G__7004__a.length) {G__7004__a[G__7004__i] = arguments[G__7004__i + 0]; ++G__7004__i;}
  args = new cljs.core.IndexedSeq(G__7004__a,0,null);
} 
return G__7003__delegate.call(this,args);};
G__7003.cljs$lang$maxFixedArity = 0;
G__7003.cljs$lang$applyTo = (function (arglist__7005){
var args = cljs.core.seq(arglist__7005);
return G__7003__delegate(args);
});
G__7003.cljs$core$IFn$_invoke$arity$variadic = G__7003__delegate;
return G__7003;
})()
:adarsh_quil.core.draw_state)], 0));
});
goog.exportSymbol('adarsh_quil.core.adarsh_quil', adarsh_quil.core.adarsh_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__5625__5626__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5625__5626__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,adarsh_quil.core.adarsh_quil,cljs.core.cst$kw$host_DASH_id,"adarsh-quil"], null));
}
});
goog.exportSymbol('adarsh_quil.core.run_sketch', adarsh_quil.core.run_sketch);
