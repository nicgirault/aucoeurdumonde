<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp-acdm');

/** MySQL database username */
define('DB_USER', 'wp-acdm');

/** MySQL database password */
define('DB_PASSWORD', 'carotte');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'bi4U1E$j}9A}}Yk*`I x0^UtDag`:{^;,X.-zkY:%pYisb;>T%Z3,3<L,|h{{y N');
define('SECURE_AUTH_KEY',  'rU-Mu2p+jlxbU4M>KUg`^tPF+e+^ZNg(taV.8!+cmCn{Wu#q|Lm,S|!]Ah5:l9KS');
define('LOGGED_IN_KEY',    '~.8QQGp[9<d9XPt}<Nw_G%}=T@|vvLgUQgh %hWm7E-sMX.WYQe2HQG@,&=.#%~x');
define('NONCE_KEY',        'LAkNyW5J$Rj$KArD{>2^<%c$KS}-TYzyC?R[Az,+=ip$QS4jd_gB<JjLzriB3V3a');
define('AUTH_SALT',        'q>E2gqmK,QkV0-sa,@7v+?n:_Z!:0Nb>}~86W)v+Y]usW+Rwjy|=6FR~4xn16tmJ');
define('SECURE_AUTH_SALT', 'P-+lJN{V}6u0+azpxMf6x`~$++y2CMnF%00N6+*rre(dC^,fdJ>z<FLpC.5O_=Q)');
define('LOGGED_IN_SALT',   'B|8y-agW&BDAIQ!==+74DnP@Xd[Ni_T3:W<GAP?=RCZ6+`u68y8K9CxQ{btU}J[e');
define('NONCE_SALT',       ',bhPH fkWg|8%BM2r@bAYI-]OB;UIj9#lgAxte:Gq4P+?p9SOUa6v]r0}^-a1EXT');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
