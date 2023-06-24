<template>
  <div class="flex justify-center">
      <fieldset class="border-b border-t border-gray-200 w-full sm:w-1/2">
        <legend class="sr-only">Tasks</legend>
        <div class="divide-y divide-gray-200">
          <div class="relative flex items-start pb-4 pt-3.5" v-for="item in 100">
            <div class="min-w-0 flex-1 text-sm leading-6">
              <label for="comments" class="font-medium text-gray-900">Comments</label>
              <p id="comments-description" class="text-gray-500">Get notified when someones posts a comment on a posting.
              </p>
            </div>
            <div class="ml-3 flex h-6 items-center">
              <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
          </div>
          
        </div>
      </fieldset>
  </div>
</template>