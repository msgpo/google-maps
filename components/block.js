/**
 *     <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'>
 </script>
 */
polarity.export = PolarityComponent.extend({
    map: null,
    onPropertiesSet: function(integrationBlockSource){
        // there is no default action for this method but it can be overridden to track block information
        this.set('isCollapsed', false);
    },
    initmap:  function() {

        if(this.get('block.isCollapsed'))
            return;

        var map = this.get('map');
        var entity = this.get('block.data.details');

        var a = entity.latitude;
        var b = entity.longitude;

        if(map === null) {

            var myOptions = {
                scrollwheel:false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: true,
                center: new google.maps.LatLng(a, b),
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };


            map = new google.maps.Map(this.$('.geo-integration-map')[0], myOptions);
            this.set('map', map);


        }

        google.maps.event.addListenerOnce(map, 'idle', function() {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(new google.maps.LatLng(a,b));
        });

    }.observes('block.isCollapsed'),
    actions: {

    }


});
