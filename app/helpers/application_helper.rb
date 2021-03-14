module ApplicationHelper
  def body_class
    current_page?(controller: 'dashboards', action: 'dashboard')  ? 'dashboard' : 'app'
  end
end
