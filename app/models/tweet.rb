class Tweet < ApplicationRecord
  belongs_to :user

  def as_json(options={})
    super(methods: [:name])
  end

  def name
    user.display_name
  end

  def gravatar
    hash = Digest::MD5.hexdigest(user.email)
  end
end
