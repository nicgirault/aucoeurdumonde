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
    // Arguments used (when defining new post type) to define a menu
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

    // Define the new post type
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


// This function return the html code replacing the shortcode
function get_news($atts, $content = null){
    // get shortcode attributes
    extract(shortcode_atts(
        array("limit" => '', "title" => ''),
        $atts)
    );
	
    // Parsing shortcode attributes
	if($limit){ 
		$posts_per_page = $limit; 
	} else {
		$posts_per_page = '-1';
	}

    $query_args = array(
        'suppress_filters' => true,
        'posts_per_page' => $posts_per_page,
        'post_type' => 'news',
        'order' => 'DESC'
    );
                 
    $cust_loop = new WP_Query($query_args);
    
    //Rendering
    $html ="<div class='acdm-news'>";
    if($title){
        $html .= "<h3>".$title."</h3>";
    }    
    if ($cust_loop->have_posts()) :
        $html .= "<ul>";
        foreach($cust_loop->posts as $post) :
            $categories = get_the_category($post->ID);
            $cats = array();
            foreach($categories as $cat){
                $cats[] = get_cat_name($cat->term_id);
            }
            $html .= 
                "<li class='".implode(' ', $cats)."'><span class='news-list-content'>".
                    $post->post_title.
                "</span></li>";
        endforeach;
        $html .= "</ul>";
    endif;
    $html .= "</div>";

    wp_reset_query(); 
				
    return $html;	             
}
add_shortcode('sp_news','get_news');	

function acdm_news_css_scripts() {
    wp_register_style( 'cssnews', plugin_dir_url( __FILE__ ) . 'css/stylenews.css' );
    wp_enqueue_style('cssnews');
}
add_action( 'wp_enqueue_scripts', 'acdm_news_css_scripts' );
