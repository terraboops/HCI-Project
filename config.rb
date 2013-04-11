###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
helpers do 
  def calendarTableCell (calendarDate, dates, noise=nil)
    cell = "<td></td>"
    if dates.include?(calendarDate)
      if calendarDate.day == 20 #this is what not giving a shit looks like.
        cell = '<td class="event1"><a href="/events/lanparty.html">' + calendarDate.day.to_s + '</a></td>'
      else
        cell = '<td class="event"><a href="/events/thetao.html">' + calendarDate.day.to_s + '</a></td>'
      end
    else
      if noise == 0
        cell = '<td class="event"><a href="#">' + calendarDate.day.to_s + '</a></td>'
      elsif noise == 1
        cell = '<td class="event1"><a href="#">' + calendarDate.day.to_s + '</a></td>'
      else
        cell = '<td>' + calendarDate.day.to_s + '</td>'
      end
    end
  end
end

data.info.each do |site|
  proxy "#{site.url}", "/info/template.html", :locals => { :site => site }, :ignore => true
end

data.blog.each do |site|
  proxy "#{site.url}", "/blog/template.html", :locals => { :site => site }, :ignore => true
end

data.events.each do |site|
  proxy "#{site.url}", "/events/template.html", :locals => { :site => site }, :ignore => true
end

data.jobs.alumni.each do |site|
  proxy "#{site.url}", "/jobs/template.html", :locals => { :site => site }, :ignore => true
end

data.jobs.currentStudents.each do |site|
  proxy "#{site.url}", "/jobs/template.html", :locals => { :site => site }, :ignore => true
end

data.site.admin_pages.each do |site|
  proxy "#{site.url}", "/admin/manage/template.html", :locals => { :site => site }, :ignore => true
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

activate :livereload

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end