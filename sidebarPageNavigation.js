/* Jquery SidebarPageNavigation */
(function($){

    $.pageNavigation = function(newOptions){
        
        var options = $.extend({
                navigationTag : 'nav',
                navigationClass : 'pageNavigation',
                scrollToTriggerClass : 'scrollToTrigger',
                navigationTopPadding : 200,
                pageNavigationTargets : '.pageNavigationTarget',
                navigationAnimationSpeed : 500,
            }, newOptions),

            $window = $(window),
            pageNavigationTargets = $(options.pageNavigationTargets),
            navigation,
            sidebarHTML,
            navigationOffset,

            init = function(){
                if (pageNavigationTargets.length){
                    sidebarHTML =  '<' + options.navigationTag + ' class="' + options.navigationClass + '">';
                    sidebarHTML += '<ul>';

                    pageNavigationTargets.each(function(idx){
                        $this = $(this);
                        sidebarHTML += '<li><a href="#' + $this.attr('id') + '" data-section-title="' + $this.attr('data-section-title') + '" class="' + options.scrollToTriggerClass + '"></a></li>';
                    });

                    sidebarHTML += '</ul>';
                    sidebarHTML += '</' + options.navigationTag + '>';
                    $('body').append(sidebarHTML);
                    navigation = $('.' + options.navigationClass);

                    // Bind Scroll
                    navigationOffset = navigation.offset();
                    $window.on('scroll resize', positionNavigation);
                }

                positionNavigation();
                scrollToInit();

            },

            positionNavigation = function(){
                navigation.stop().animate({ top: ($window.scrollTop() + options.navigationTopPadding > options.navigationTopPadding) ? $window.scrollTop() + options.navigationTopPadding : options.navigationTopPadding }, options.navigationAnimationSpeed);
            },

            scrollToInit = function(){
                var scrollToTriggers = $('.' + options.scrollToTriggerClass);

                scrollToTriggers.on('click', function(e){
                    var target = $($(this).attr('href'));

                    e.preventDefault();

                    if( target.length ){
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, options.navigationAnimationSpeed);
                    }
                });
            }

            init();
    }

})(jQuery);