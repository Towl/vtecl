---
layout: post
tag: hint
title: Syntaxe surchargée
---

AngularJS n'est pas le seul framework à utiliser les doubles accolades pour encapsuler sa syntaxe dans le HTML, des conflits apparaisse lorsde l'utilisation de
plusieurs de ces framework pour une même application mais ce n'est pas sans solution.

En voulant utiliser conjointement Jekyll et AngularJS pour une application de démonstration je me suis confronté à ce problème. Suite à une recherche sur le net
la solution m'a été apporté par ce [topic][solution] du forum Stackoverflow, puis confirmer par la [documentation][reference] d'AngularJS.

{% highlight javascript %}
angular.module('myApp', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);
{% endhighlight %}

[solution]:http://stackoverflow.com/questions/13671701/angularjs-twig-conflict-with-double-curly-braces
[reference]:http://docs.angularjs.org/api/ng/provider/$interpolateProvider
