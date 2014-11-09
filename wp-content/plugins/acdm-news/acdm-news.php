<?php
/*
Plugin Name: ACDM-news
Description: To display news on the home page
Author: Nicolas Girault
*/

/*
 * Register CPT sp_News
 *
 */
// Initialization function
add_action('init', 'sp_cpt_news_init');
function sp_cpt_news_init() {
  // Create new News custom post type
    $news_labels = array(
    'name'                 => _x('News', 'post type general name'),
    'singular_name'        => _x('News', 'post type singular name'),
    'add_new'              => _x('Add News Item', 'news'),
    'add_new_item'         => __('Add New News Item'),
    'edit_item'            => __('Edit News Item'),
    'new_item'             => __('New News Item'),
    'view_item'            => __('View News Item'),
    'search_items'         => __('Search  News Items'),
    'not_found'            =>  __('No News Items found'),
    'not_found_in_trash'   => __('No  News Items found in Trash'), 
    '_builtin'             =>  false, 
    'parent_item_colon'    => '',
    'menu_name'            => 'Home News'
  );
  $news_args = array(
    'labels'              => $news_labels,
    'public'              => true,
    'publicly_queryable'  => true,
    'exclude_from_search' => false,
    'show_ui'             => true,
    'show_in_menu'        => true, 
    'query_var'           => true,
    'rewrite'             => array( 
							'slug' => 'news',
							'with_front' => false
							),
    'capability_type'     => 'post',
    'has_archive'         => true,
    'hierarchical'        => false,
    'menu_position'       => 8,
    'menu_icon'           => plugins_url( 'images/newspaper-add-icon.png', __FILE__ ),
    'supports'            => array('title','editor','thumbnail','excerpt','comments'),
    'taxonomies'          => array('category', 'post_tag')
  );
  register_post_type('news',$news_args);
}

function my_rewrite_flush() {  
		sp_cpt_news_init();  
    flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'my_rewrite_flush' );

class SP_News_Widget extends WP_Widget {

    function SP_News_Widget() {

        $widget_ops = array('classname' => 'SP_News_Widget', 'description' => __('Displayed Letest News Items from the News  in a sidebar', 'news_cpt') );
        $control_ops = array( 'width' => 350, 'height' => 450, 'id_base' => 'sp_news_widget' );
        $this->WP_Widget( 'sp_news_widget', __('Letest News Widget', 'news_cpt'), $widget_ops, $control_ops );
    }

    function form($instance) {
        $instance = wp_parse_args((array) $instance, array( 'title' => '' ));
        $title = isset($instance['title']) ? esc_attr($instance['title']) : '';
        $num_items = isset($instance['num_items']) ? absint($instance['num_items']) : 5;
    ?>
      <p><label for="<?php echo $this->get_field_id('title'); ?>">Title: <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo attribute_escape($title); ?>" /></label></p>
      <p><label for="<?php echo $this->get_field_id('num_items'); ?>">Number of Items: <input class="widefat" id="<?php echo $this->get_field_id('num_items'); ?>" name="<?php echo $this->get_field_name('num_items'); ?>" type="text" value="<?php echo attribute_escape($num_items); ?>" /></label></p>
    <?php
    }

    function update($new_instance, $old_instance) {
        $instance = $old_instance;
        $instance['title'] = $new_instance['title'];
        $instance['num_items'] = $new_instance['num_items'];
        return $instance;
    }
    function widget($news_args, $instance) {
        extract($news_args, EXTR_SKIP);

        $current_post_name = get_query_var('name');

        $title = empty($instance['title']) ? '' : apply_filters('widget_title', $instance['title']);
        $num_items = empty($instance['num_items']) ? '5' : apply_filters('widget_title', $instance['num_items']);

        $postcount = 0;

        echo $before_widget;

?>
            <h4 class="sp_new_title"><?php echo $title ?></h4>
            <!--visual-columns-->
            <div class="recent-news-items">
                <ul>
            <?php // setup the query
            $news_args = array( 'suppress_filters' => true,
                           'posts_per_page' => $num_items,
                           'post_type' => 'news',
                           'order' => 'DESC'
                         );

            $cust_loop = new WP_Query($news_args);
            if ($cust_loop->have_posts()) : while ($cust_loop->have_posts()) : $cust_loop->the_post(); $postcount++;
                    ?>
                    <li>
                        <a class="post-title" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
						
                    </li>
            <?php endwhile;
            endif;
             wp_reset_query(); ?>

                </ul>
            </div>
<?php
        echo $after_widget;
    }
}



function get_news($atts, $content = null){
    // setup the query
    extract(shortcode_atts(
        array("limit" => ''),
        $atts)
    );
	
    // Define limit
	if( $limit ) { 
		$posts_per_page = $limit; 
	} else {
		$posts_per_page = '-1';
	}
	
    $news_args = array(
        'suppress_filters' => true,
        'posts_per_page' => $posts_per_page,
        'post_type' => 'news',
        'order' => 'DESC'
    );
                 
    $cust_loop = new WP_Query($news_args);
            
    if ($cust_loop->have_posts()) :
        //Rendering
        $html ="";
        foreach($cust_loop->posts as $post) :
            $categories = get_the_category($post->ID);
            $cats = array();
            foreach($categories as $cat){
                $cats[] = get_cat_name($cat->term_id);
            }
            $html .= 
                "<li class='".implode(' ', $cats)."'>".
                    $post->post_title.
                "</li>";
        endforeach;
    endif;
    wp_reset_query(); 
				
    return $html;	             
}
add_shortcode('sp_news','get_news');	


wp_register_style( 'cssnews', plugin_dir_url( __FILE__ ) . 'css/stylenews.css' );
wp_enqueue_style( 'cssnews' );
