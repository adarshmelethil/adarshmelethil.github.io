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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6916 = (adarsh_quil.core.screen_size_ratio * quil.core.width());
return Math.round(G__6916);
})(),(function (){var G__6917 = (adarsh_quil.core.screen_size_ratio * quil.core.height());
return Math.round(G__6917);
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
adarsh_quil.core.update_weight = (function adarsh_quil$core$update_weight(p__6921){
var map__6922 = p__6921;
var map__6922__$1 = (((((!((map__6922 == null))))?(((((map__6922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6922):map__6922);
var state = map__6922__$1;
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6922__$1,cljs.core.cst$kw$weight);
var finished = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__6922,map__6922__$1,state,weight){
return (function (p1__6918_SHARP_){
return adarsh_quil.common.done_QMARK_(cljs.core.second(p1__6918_SHARP_));
});})(map__6922,map__6922__$1,state,weight))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6922,map__6922__$1,state,weight){
return (function (p1__6919_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(adarsh_quil.common.weight(cljs.core.second(p1__6919_SHARP_)),weight);
});})(map__6922,map__6922__$1,state,weight))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6922,map__6922__$1,state,weight){
return (function (p1__6920_SHARP_){
var G__6924 = cljs.core.second(p1__6920_SHARP_);
if((!((G__6924 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6924.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6924.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6924);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6924);
}
});})(map__6922,map__6922__$1,state,weight))
,state)));
if((((cljs.core.count(finished) > (0))) && (cljs.core.every_QMARK_(cljs.core.true_QMARK_,finished)))){
return (weight + (1));
} else {
return weight;
}
});
adarsh_quil.core.update_state = (function adarsh_quil$core$update_state(p__6927){
var map__6928 = p__6927;
var map__6928__$1 = (((((!((map__6928 == null))))?(((((map__6928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6928):map__6928);
var state = map__6928__$1;
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6928__$1,cljs.core.cst$kw$weight);
var seq__6930_6952 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__6928,map__6928__$1,state,weight){
return (function (p1__6925_SHARP_){
var and__4120__auto__ = (function (){var G__6943 = cljs.core.second(p1__6925_SHARP_);
if((!((G__6943 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6943.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6943);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight(cljs.core.second(p1__6925_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
});})(map__6928,map__6928__$1,state,weight))
,state));
var chunk__6931_6953 = null;
var count__6932_6954 = (0);
var i__6933_6955 = (0);
while(true){
if((i__6933_6955 < count__6932_6954)){
var vec__6944_6956 = chunk__6931_6953.cljs$core$IIndexed$_nth$arity$2(null,i__6933_6955);
var __6957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6944_6956,(0),null);
var v_6958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6944_6956,(1),null);
adarsh_quil.common.render(v_6958);


var G__6959 = seq__6930_6952;
var G__6960 = chunk__6931_6953;
var G__6961 = count__6932_6954;
var G__6962 = (i__6933_6955 + (1));
seq__6930_6952 = G__6959;
chunk__6931_6953 = G__6960;
count__6932_6954 = G__6961;
i__6933_6955 = G__6962;
continue;
} else {
var temp__5735__auto___6963 = cljs.core.seq(seq__6930_6952);
if(temp__5735__auto___6963){
var seq__6930_6964__$1 = temp__5735__auto___6963;
if(cljs.core.chunked_seq_QMARK_(seq__6930_6964__$1)){
var c__4550__auto___6965 = cljs.core.chunk_first(seq__6930_6964__$1);
var G__6966 = cljs.core.chunk_rest(seq__6930_6964__$1);
var G__6967 = c__4550__auto___6965;
var G__6968 = cljs.core.count(c__4550__auto___6965);
var G__6969 = (0);
seq__6930_6952 = G__6966;
chunk__6931_6953 = G__6967;
count__6932_6954 = G__6968;
i__6933_6955 = G__6969;
continue;
} else {
var vec__6947_6970 = cljs.core.first(seq__6930_6964__$1);
var __6971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6947_6970,(0),null);
var v_6972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6947_6970,(1),null);
adarsh_quil.common.render(v_6972);


var G__6973 = cljs.core.next(seq__6930_6964__$1);
var G__6974 = null;
var G__6975 = (0);
var G__6976 = (0);
seq__6930_6952 = G__6973;
chunk__6931_6953 = G__6974;
count__6932_6954 = G__6975;
i__6933_6955 = G__6976;
continue;
}
} else {
}
}
break;
}

var new_state = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__6928,map__6928__$1,state,weight){
return (function (p1__6926_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__6926_SHARP_),(((function (){var and__4120__auto__ = (function (){var G__6951 = cljs.core.second(p1__6926_SHARP_);
if((!((G__6951 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__6951.adarsh_quil$common$Drawable$)))){
return true;
} else {
if((!G__6951.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6951);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(adarsh_quil.common.Drawable,G__6951);
}
})();
if(and__4120__auto__){
return (adarsh_quil.common.weight(cljs.core.second(p1__6926_SHARP_)) <= weight);
} else {
return and__4120__auto__;
}
})())?adarsh_quil.common.next_state(cljs.core.second(p1__6926_SHARP_)):cljs.core.second(p1__6926_SHARP_))],null));
});})(map__6928,map__6928__$1,state,weight))
,state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$weight,adarsh_quil.core.update_weight(new_state));
});
adarsh_quil.core.draw_state = (function adarsh_quil$core$draw_state(p__6977){
var map__6978 = p__6977;
var map__6978__$1 = (((((!((map__6978 == null))))?(((((map__6978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6978):map__6978);
var state = map__6978__$1;
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6978__$1,cljs.core.cst$kw$background);
var screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6978__$1,cljs.core.cst$kw$screen);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6978__$1,cljs.core.cst$kw$profile);
var dark_blue_6983 = quil.core.color.cljs$core$IFn$_invoke$arity$3((16),(67),(115));
quil.core.background.cljs$core$IFn$_invoke$arity$1(dark_blue_6983);

quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(background),(0),(0));

var vec__6980 = adarsh_quil.core.screen_size();
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6980,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6980,(1),null);
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
var G__6984__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.settings,args);
};
var G__6984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6985__i = 0, G__6985__a = new Array(arguments.length -  0);
while (G__6985__i < G__6985__a.length) {G__6985__a[G__6985__i] = arguments[G__6985__i + 0]; ++G__6985__i;}
  args = new cljs.core.IndexedSeq(G__6985__a,0,null);
} 
return G__6984__delegate.call(this,args);};
G__6984.cljs$lang$maxFixedArity = 0;
G__6984.cljs$lang$applyTo = (function (arglist__6986){
var args = cljs.core.seq(arglist__6986);
return G__6984__delegate(args);
});
G__6984.cljs$core$IFn$_invoke$arity$variadic = G__6984__delegate;
return G__6984;
})()
:adarsh_quil.core.settings),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(adarsh_quil.core.update_state))?(function() { 
var G__6987__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.update_state,args);
};
var G__6987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6988__i = 0, G__6988__a = new Array(arguments.length -  0);
while (G__6988__i < G__6988__a.length) {G__6988__a[G__6988__i] = arguments[G__6988__i + 0]; ++G__6988__i;}
  args = new cljs.core.IndexedSeq(G__6988__a,0,null);
} 
return G__6987__delegate.call(this,args);};
G__6987.cljs$lang$maxFixedArity = 0;
G__6987.cljs$lang$applyTo = (function (arglist__6989){
var args = cljs.core.seq(arglist__6989);
return G__6987__delegate(args);
});
G__6987.cljs$core$IFn$_invoke$arity$variadic = G__6987__delegate;
return G__6987;
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
var G__6990__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.setup,args);
};
var G__6990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6991__i = 0, G__6991__a = new Array(arguments.length -  0);
while (G__6991__i < G__6991__a.length) {G__6991__a[G__6991__i] = arguments[G__6991__i + 0]; ++G__6991__i;}
  args = new cljs.core.IndexedSeq(G__6991__a,0,null);
} 
return G__6990__delegate.call(this,args);};
G__6990.cljs$lang$maxFixedArity = 0;
G__6990.cljs$lang$applyTo = (function (arglist__6992){
var args = cljs.core.seq(arglist__6992);
return G__6990__delegate(args);
});
G__6990.cljs$core$IFn$_invoke$arity$variadic = G__6990__delegate;
return G__6990;
})()
:adarsh_quil.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(adarsh_quil.core.draw_state))?(function() { 
var G__6993__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(adarsh_quil.core.draw_state,args);
};
var G__6993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6994__i = 0, G__6994__a = new Array(arguments.length -  0);
while (G__6994__i < G__6994__a.length) {G__6994__a[G__6994__i] = arguments[G__6994__i + 0]; ++G__6994__i;}
  args = new cljs.core.IndexedSeq(G__6994__a,0,null);
} 
return G__6993__delegate.call(this,args);};
G__6993.cljs$lang$maxFixedArity = 0;
G__6993.cljs$lang$applyTo = (function (arglist__6995){
var args = cljs.core.seq(arglist__6995);
return G__6993__delegate(args);
});
G__6993.cljs$core$IFn$_invoke$arity$variadic = G__6993__delegate;
return G__6993;
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
