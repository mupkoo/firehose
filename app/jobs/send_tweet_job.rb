# frozen_string_literal: true

require 'twitter_client'

class SendTweetJob < ApplicationJob
  queue_as :default

  def self.send(link)
    perform_later(link.id)
  end

  def perform(link_id)
    link = Link.find(link_id)
    twitter_client.post(link)
  end

  private

  def twitter_client
    TwitterClient
  end
end
