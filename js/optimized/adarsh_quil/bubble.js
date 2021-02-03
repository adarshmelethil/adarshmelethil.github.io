// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('adarsh_quil.bubble');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('adarsh_quil.common');
goog.require('adarsh_quil.utils');
adarsh_quil.bubble.process_img_once = (function adarsh_quil$bubble$process_img_once(img,width,height){
quil.core.resize(img,width,height);

return img;
});
adarsh_quil.bubble.frame_mask = (function adarsh_quil$bubble$frame_mask(width,height){
var mask = quil.core.create_image(width,height);
var mask_px = quil.core.pixels.cljs$core$IFn$_invoke$arity$1(mask);
var hw = (width / (2));
var hh = (height / (2));
var r = (function (){var x__4222__auto__ = hw;
var y__4223__auto__ = hh;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var n__4607__auto___6852 = width;
var x_6853 = (0);
while(true){
if((x_6853 < n__4607__auto___6852)){
var n__4607__auto___6854__$1 = height;
var y_6855 = (0);
while(true){
if((y_6855 < n__4607__auto___6854__$1)){
if((((function (){var G__6848 = (x_6853 - hw);
var G__6849 = (2);
return Math.pow(G__6848,G__6849);
})() + (function (){var G__6850 = (y_6855 - hh);
var G__6851 = (2);
return Math.pow(G__6850,G__6851);
})()) < Math.pow(r,(2)))){
(mask_px[(((3) + ((4) * x_6853)) + (y_6855 * ((4) * width)))] = (255));
} else {
}

var G__6856 = (y_6855 + (1));
y_6855 = G__6856;
continue;
} else {
}
break;
}

var G__6857 = (x_6853 + (1));
x_6853 = G__6857;
continue;
} else {
}
break;
}

quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1(mask);

return mask;
});
adarsh_quil.bubble.apply_frame = (function adarsh_quil$bubble$apply_frame(img,frame){
var width = img.width;
var height = img.height;
var new_img = quil.core.create_image(width,height);
quil.core.copy.cljs$core$IFn$_invoke$arity$4(img,new_img,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),width,height], null));

quil.core.mask_image.cljs$core$IFn$_invoke$arity$2(new_img,frame);

return new_img;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {adarsh_quil.common.Drawable}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
adarsh_quil.bubble.Bubble_Image = (function (weight,graphic,img,points,speed,size_start,size_end,size_inc,__meta,__extmap,__hash){
this.weight = weight;
this.graphic = graphic;
this.img = img;
this.points = points;
this.speed = speed;
this.size_start = size_start;
this.size_end = size_end;
this.size_inc = size_inc;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k6860,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__6864 = k6860;
var G__6864__$1 = (((G__6864 instanceof cljs.core.Keyword))?G__6864.fqn:null);
switch (G__6864__$1) {
case "weight":
return self__.weight;

break;
case "graphic":
return self__.graphic;

break;
case "img":
return self__.img;

break;
case "points":
return self__.points;

break;
case "speed":
return self__.speed;

break;
case "size-start":
return self__.size_start;

break;
case "size-end":
return self__.size_end;

break;
case "size-inc":
return self__.size_inc;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6860,else__4388__auto__);

}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__6865){
var vec__6866 = p__6865;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6866,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6866,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#adarsh-quil.bubble.Bubble-Image{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weight,self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$graphic,self__.graphic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$img,self__.img],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$points,self__.points],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$speed,self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$size_DASH_start,self__.size_start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$size_DASH_end,self__.size_end],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$size_DASH_inc,self__.size_inc],null))], null),self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6859){
var self__ = this;
var G__6859__$1 = this;
return (new cljs.core.RecordIter((0),G__6859__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weight,cljs.core.cst$kw$graphic,cljs.core.cst$kw$img,cljs.core.cst$kw$points,cljs.core.cst$kw$speed,cljs.core.cst$kw$size_DASH_start,cljs.core.cst$kw$size_DASH_end,cljs.core.cst$kw$size_DASH_inc], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,self__.__hash));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__6869 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1711428453 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__6869(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6861,other6862){
var self__ = this;
var this6861__$1 = this;
return (((!((other6862 == null)))) && ((this6861__$1.constructor === other6862.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.weight,other6862.weight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.graphic,other6862.graphic)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.img,other6862.img)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.points,other6862.points)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.speed,other6862.speed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.size_start,other6862.size_start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.size_end,other6862.size_end)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.size_inc,other6862.size_inc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6861__$1.__extmap,other6862.__extmap)));
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$ = cljs.core.PROTOCOL_SENTINEL;

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)){
var hw = (self__.graphic.width / (2));
var hh = (self__.graphic.height / (2));
var map__6870 = this$__$1;
var map__6870__$1 = (((((!((map__6870 == null))))?(((((map__6870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6870):map__6870);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6870__$1,cljs.core.cst$kw$raw);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6870__$1,cljs.core.cst$kw$frame);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6870__$1,cljs.core.cst$kw$size);
var gr__6461__auto___6899 = raw;
var _STAR_graphics_STAR__orig_val__6872_6900 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__6873_6901 = gr__6461__auto___6899;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__6873_6901;

try{quil.core.begin_draw(gr__6461__auto___6899);

quil.core.no_stroke();

var n__4607__auto___6902 = self__.points;
var __6903 = (0);
while(true){
if((__6903 < n__4607__auto___6902)){
var x_6904 = (hw + (hw * quil.core.random_gaussian()));
var y_6905 = (hh + (hh * quil.core.random_gaussian()));
var fill__6431__auto___6906 = quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3(self__.img,x_6904,y_6905);
var previous_fill__6432__auto___6907 = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__6431__auto___6906)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__6431__auto___6906);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__6431__auto___6906);

}

var return_val__6433__auto___6908 = quil.core.ellipse(x_6904,y_6905,size,size);
if((previous_fill__6432__auto___6907 == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__6432__auto___6907);
}


var G__6909 = (__6903 + (1));
__6903 = G__6909;
continue;
} else {
}
break;
}

quil.core.end_draw(gr__6461__auto___6899);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__6872_6900;
}
var gr__6461__auto__ = self__.graphic;
var _STAR_graphics_STAR__orig_val__6874 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__6875 = gr__6461__auto__;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__6875;

try{quil.core.begin_draw(gr__6461__auto__);

quil.core.clear();

quil.core.image.cljs$core$IFn$_invoke$arity$3(adarsh_quil.bubble.apply_frame(raw,frame),(0),(0));

return quil.core.end_draw(gr__6461__auto__);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__6874;
}} else {
return null;
}
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$next_state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var width = self__.graphic.width;
var height = self__.graphic.height;
if(cljs.core.truth_((function (){var and__4120__auto__ = quil.core.loaded_QMARK_(self__.img);
if(cljs.core.truth_(and__4120__auto__)){
return (((self__.img.width > (1))) && ((!(cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.cst$kw$ps,adarsh_quil.bubble.process_img_once(self__.img,width,height),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$frame,adarsh_quil.bubble.frame_mask(width,height),cljs.core.cst$kw$raw,quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height),cljs.core.cst$kw$size,self__.size_start,cljs.core.cst$kw$step,0.0], 0));
} else {
if(((cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)) && (cljs.core.not(this$__$1.adarsh_quil$common$Drawable$done_QMARK_$arity$1(null))))){
var map__6876 = this$__$1;
var map__6876__$1 = (((((!((map__6876 == null))))?(((((map__6876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6876):map__6876);
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6876__$1,cljs.core.cst$kw$step);
if((step > 1.0)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,cljs.core.cst$kw$step,0.0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$size,(function (){var x__4219__auto__ = self__.size_end;
var y__4220__auto__ = (cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(this$__$1) - self__.size_inc);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()], 0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$step,((function (map__6876,map__6876__$1,step,width,height,this$__$1){
return (function (p1__6858_SHARP_){
var x__4222__auto__ = 1.1;
var y__4223__auto__ = (p1__6858_SHARP_ + self__.speed);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(map__6876,map__6876__$1,step,width,height,this$__$1))
);
}
} else {
return this$__$1;
}
}
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$weight$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.weight;
});

adarsh_quil.bubble.Bubble_Image.prototype.adarsh_quil$common$Drawable$done_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((cljs.core.contains_QMARK_(this$__$1,cljs.core.cst$kw$step)) && ((cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(this$__$1) > (1))) && ((cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(this$__$1) <= self__.size_end)));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$size_DASH_start,null,cljs.core.cst$kw$size_DASH_end,null,cljs.core.cst$kw$speed,null,cljs.core.cst$kw$points,null,cljs.core.cst$kw$size_DASH_inc,null,cljs.core.cst$kw$graphic,null,cljs.core.cst$kw$weight,null,cljs.core.cst$kw$img,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__6859){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__6878 = cljs.core.keyword_identical_QMARK_;
var expr__6879 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__6881 = cljs.core.cst$kw$weight;
var G__6882 = expr__6879;
return (pred__6878.cljs$core$IFn$_invoke$arity$2 ? pred__6878.cljs$core$IFn$_invoke$arity$2(G__6881,G__6882) : pred__6878.call(null,G__6881,G__6882));
})())){
return (new adarsh_quil.bubble.Bubble_Image(G__6859,self__.graphic,self__.img,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6883 = cljs.core.cst$kw$graphic;
var G__6884 = expr__6879;
return (pred__6878.cljs$core$IFn$_invoke$arity$2 ? pred__6878.cljs$core$IFn$_invoke$arity$2(G__6883,G__6884) : pred__6878.call(null,G__6883,G__6884));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,G__6859,self__.img,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6885 = cljs.core.cst$kw$img;
var G__6886 = expr__6879;
return (pred__6878.cljs$core$IFn$_invoke$arity$2 ? pred__6878.cljs$core$IFn$_invoke$arity$2(G__6885,G__6886) : pred__6878.call(null,G__6885,G__6886));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,G__6859,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6887 = cljs.core.cst$kw$points;
var G__6888 = expr__6879;
return (pred__6878.cljs$core$IFn$_invoke$arity$2 ? pred__6878.cljs$core$IFn$_invoke$arity$2(G__6887,G__6888) : pred__6878.call(null,G__6887,G__6888));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,G__6859,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6889 = cljs.core.cst$kw$speed;
var G__6890 = expr__6879;
return (pred__6878.cljs$core$IFn$_invoke$arity$2 ? pred__6878.cljs$core$IFn$_invoke$arity$2(G__6889,G__6890) : pred__6878.call(null,G__6889,G__6890));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.points,G__6859,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6891 = cljs.core.cst$kw$size_DASH_start;
var G__6892 = expr__6879;
return (pred__6878.cljs$core$IFn$_invoke$arity$2 ? pred__6878.cljs$core$IFn$_invoke$arity$2(G__6891,G__6892) : pred__6878.call(null,G__6891,G__6892));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.points,self__.speed,G__6859,self__.size_end,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6893 = cljs.core.cst$kw$size_DASH_end;
var G__6894 = expr__6879;
return (pred__6878.cljs$core$IFn$_invoke$arity$2 ? pred__6878.cljs$core$IFn$_invoke$arity$2(G__6893,G__6894) : pred__6878.call(null,G__6893,G__6894));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.points,self__.speed,self__.size_start,G__6859,self__.size_inc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6895 = cljs.core.cst$kw$size_DASH_inc;
var G__6896 = expr__6879;
return (pred__6878.cljs$core$IFn$_invoke$arity$2 ? pred__6878.cljs$core$IFn$_invoke$arity$2(G__6895,G__6896) : pred__6878.call(null,G__6895,G__6896));
})())){
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.points,self__.speed,self__.size_start,self__.size_end,G__6859,self__.__meta,self__.__extmap,null));
} else {
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__6859),null));
}
}
}
}
}
}
}
}
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$weight,self__.weight,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$graphic,self__.graphic,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$img,self__.img,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$points,self__.points,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$speed,self__.speed,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$size_DASH_start,self__.size_start,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$size_DASH_end,self__.size_end,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$size_DASH_inc,self__.size_inc,null))], null),self__.__extmap));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__6859){
var self__ = this;
var this__4384__auto____$1 = this;
return (new adarsh_quil.bubble.Bubble_Image(self__.weight,self__.graphic,self__.img,self__.points,self__.speed,self__.size_start,self__.size_end,self__.size_inc,G__6859,self__.__extmap,self__.__hash));
});

adarsh_quil.bubble.Bubble_Image.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

adarsh_quil.bubble.Bubble_Image.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$weight,cljs.core.cst$sym$graphic,cljs.core.cst$sym$img,cljs.core.cst$sym$points,cljs.core.cst$sym$speed,cljs.core.cst$sym$size_DASH_start,cljs.core.cst$sym$size_DASH_end,cljs.core.cst$sym$size_DASH_inc], null);
});

adarsh_quil.bubble.Bubble_Image.cljs$lang$type = true;

adarsh_quil.bubble.Bubble_Image.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"adarsh-quil.bubble/Bubble-Image",null,(1),null));
});

adarsh_quil.bubble.Bubble_Image.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"adarsh-quil.bubble/Bubble-Image");
});

/**
 * Positional factory function for adarsh-quil.bubble/Bubble-Image.
 */
adarsh_quil.bubble.__GT_Bubble_Image = (function adarsh_quil$bubble$__GT_Bubble_Image(weight,graphic,img,points,speed,size_start,size_end,size_inc){
return (new adarsh_quil.bubble.Bubble_Image(weight,graphic,img,points,speed,size_start,size_end,size_inc,null,null,null));
});

/**
 * Factory function for adarsh-quil.bubble/Bubble-Image, taking a map of keywords to field values.
 */
adarsh_quil.bubble.map__GT_Bubble_Image = (function adarsh_quil$bubble$map__GT_Bubble_Image(G__6863){
var extmap__4424__auto__ = (function (){var G__6897 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6863,cljs.core.cst$kw$weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$graphic,cljs.core.cst$kw$img,cljs.core.cst$kw$points,cljs.core.cst$kw$speed,cljs.core.cst$kw$size_DASH_start,cljs.core.cst$kw$size_DASH_end,cljs.core.cst$kw$size_DASH_inc], 0));
if(cljs.core.record_QMARK_(G__6863)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6897);
} else {
return G__6897;
}
})();
return (new adarsh_quil.bubble.Bubble_Image(cljs.core.cst$kw$weight.cljs$core$IFn$_invoke$arity$1(G__6863),cljs.core.cst$kw$graphic.cljs$core$IFn$_invoke$arity$1(G__6863),cljs.core.cst$kw$img.cljs$core$IFn$_invoke$arity$1(G__6863),cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(G__6863),cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(G__6863),cljs.core.cst$kw$size_DASH_start.cljs$core$IFn$_invoke$arity$1(G__6863),cljs.core.cst$kw$size_DASH_end.cljs$core$IFn$_invoke$arity$1(G__6863),cljs.core.cst$kw$size_DASH_inc.cljs$core$IFn$_invoke$arity$1(G__6863),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

adarsh_quil.bubble.profile_bubble_img = (function adarsh_quil$bubble$profile_bubble_img(weight,p__6910){
var vec__6911 = p__6910;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6911,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6911,(1),null);
var profile_img_url = "img/profile.jpeg";
return (new adarsh_quil.bubble.Bubble_Image(weight,quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2(width,height),quil.core.load_image(profile_img_url),(100),0.1,(50),(8),(2),null,null,null));
});
