require 'test_helper'

class LessonSettingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lesson_setting = lesson_settings(:one)
  end

  test "should get index" do
    get lesson_settings_url, as: :json
    assert_response :success
  end

  test "should create lesson_setting" do
    assert_difference('LessonSetting.count') do
      post lesson_settings_url, params: { lesson_setting: { grade: @lesson_setting.grade, lesson_id: @lesson_setting.lesson_id, subject: @lesson_setting.subject, user: @lesson_setting.user } }, as: :json
    end

    assert_response 201
  end

  test "should show lesson_setting" do
    get lesson_setting_url(@lesson_setting), as: :json
    assert_response :success
  end

  test "should update lesson_setting" do
    patch lesson_setting_url(@lesson_setting), params: { lesson_setting: { grade: @lesson_setting.grade, lesson_id: @lesson_setting.lesson_id, subject: @lesson_setting.subject, user: @lesson_setting.user } }, as: :json
    assert_response 200
  end

  test "should destroy lesson_setting" do
    assert_difference('LessonSetting.count', -1) do
      delete lesson_setting_url(@lesson_setting), as: :json
    end

    assert_response 204
  end
end
