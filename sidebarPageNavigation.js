/* Jquery SidebarPageNavigation */
(function($){

    $.pageNavigation = {
        defaultOptions : {
            navigationClass : 'pageNavigation',
            scrollToTriggerClass : 'scrollToTrigger',
            navigationTopPadding : 200,
            pageNavigationTargets : '.pageNavigationTarget',
        }
    }

    $.extend({
        pageNavigation : function(newOptions){
            var options = $.extend($.pageNavigation.defaultOptions, newOptions),
                $window = $(window),
                pageNavigationTargets = $(options.pageNavigationTargets),
                navigation,
                sidebarHTML,
                navigationOffset,

                /*
                    To Do:
                    - Check over code to insure it works in Jquery Plugin state
                    - Add CSS for different sidebar styles
                */

                init = function(){
                    // Create Page Navigation
                    if (pageNavigationTargets.length){
                        sidebarHTML =  '<nav class="' + options.navigationClass + '">';
                        sidebarHTML += '<ul>';

                        pageNavigationTargets.each(function(idx){
                            $this = $(this);
                            sidebarHTML += '<li><a href="#' + $this.attr('id') + '" data-section-title="' + $this.attr('data-section-title') + '" class="' + options.scrollToTriggerClass + '"></a></li>';
                        });

                        sidebarHTML += '</ul>';
                        sidebarHTML += '</nav>';
                        $('body').append(sidebarHTML);
                        navigation = $('.' + options.navigationClass);
                    }

                    // Bind Scroll
                    navigationOffset = navigation.offset();
                    $window.on('scroll resize', positionNavigation);
                },

                positionNavigation = function(){
                    navigation.stop().animate({ top: ($window.scrollTop() + navigationTopPadding > navigationTopPadding) ? $window.scrollTop() + navigationTopPadding : navigationTopPadding }, options.navigationAnimationSpeed);
                },

                scrollTo = function(){
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
    });

})(jQuery);